const User = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json({
      success: true,
      message: "All users retrieved successfully",
      users: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

module.exports = getAllUsers;
