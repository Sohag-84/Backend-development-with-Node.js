const multer = require("multer");
const path = require("path");

//set our multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cab) {
    cab(null, "uploads/");
  },
  filename: function (req, file, cab) {
    cab(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

//file filter function
const checkFileFilter = (req, file, cab) => {
  if (file.mimetype.startsWith("image")) {
    cab(null, true);
  } else {
    cab(new Error("Not and image! Please upload only image."));
  }
};

//multer middleware
module.exports = multer({
  storage: storage,
  fileFilter: checkFileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB file size will be allow to upload
  },
});
