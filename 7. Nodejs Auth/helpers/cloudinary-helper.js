const cloudinary = require("../config/cloudinary");
const crypto = require("crypto");

const timestamp = Math.round(new Date().getTime() / 1000);
const signature = crypto
  .createHash("sha1")
  .update(`timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`)
  .digest("hex");

const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      timestamp,
      signature,
      api_key: process.env.CLOUDINARY_API_KEY,
    });
    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.log("Error while uploading to cloudinary", error);
    throw new Error("Error while uploading to cloudinary");
  }
};

module.exports = {
  uploadToCloudinary,
};
