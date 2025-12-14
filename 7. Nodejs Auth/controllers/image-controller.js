const Image = require("../models/image");
const fs = require("fs");

const cloudinary = require("../config/cloudinary");
const { uploadToCloudinary } = require("../helpers/cloudinary-helper");

const uploadImageController = async (req, res) => {
  try {
    //check if file is missing in req object
    if (!req.file) {
      return res.status(404).json({
        success: false,
        message: "File is required. Please upload an image",
      });
    }

    //upload to cloudinary
    const { url, publicId } = await uploadToCloudinary(req.file.path);

    //store the image url and public id along with the uploaded user id in database
    const newlyUploadedImage = new Image({
      url,
      publicId,
      uploadedBy: req.userInfo.userId,
    });
    await newlyUploadedImage.save();

    //delete the file from local storage
    fs.unlinkSync(req.file.path);

    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      image: newlyUploadedImage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const fetchImagesController = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const sortBy = req.query.sortBy || "createdAt";
    const sortOrder = req.query.sortOrder === "asc" ? 1 : -1;
    const totalImages = await Image.countDocuments({});
    const totalPages = Math.ceil(totalImages / limit);

    const sortObject = {};
    sortObject[sortBy] = sortOrder;

    const images = await Image.find({})
      .sort(sortObject)
      .skip(skip)
      .limit(limit);

    // const images = await Image.find({});
    res.status(200).json({
      success: true,
      message: "Images fetched successfully",
      currentPage: page,
      totalPages,
      totalImages,
      images,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const deleteImageController = async (req, res) => {
  try {
    const imageId = req.params.id;
    const userId = req.userInfo.userId;
    const image = await Image.findById(imageId);
    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found!",
      });
    }

    //check if the image uploaded by current user
    // who is trying to delete this image
    if (image.uploadedBy.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this image",
      });
    }
    //delete this image first from your cloudinary storage
    await cloudinary.uploader.destroy(image.publicId);
    //delete this image from mongodb database
    await Image.findByIdAndDelete(imageId);
    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

module.exports = {
  uploadImageController,
  fetchImagesController,
  deleteImageController,
};
