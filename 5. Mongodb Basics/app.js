const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//create user model
const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    //create new document
    const newUser = await User.create({
      name: "Updated User",
      email: "abc@gmail.com",
      age: "130",
      isActive: true,
      tags: ["network engineer"],
    });

    //another way to create new user document
    // const user = User({
    //   name: "Raiyan",
    //   email: "raiyan@gmail.com",
    //   age: "6",
    //   isActive: true,
    //   tags: ["student", "speacker"],
    // });
    // await user.save();

    // console.log("Created new user: ", newUser);

    ///get all user
    // const allUser = await User.find();
    // console.log(allUser);

    ///specific user
    // const inActiveUsers = await User.find({ isActive: true });
    // console.log(inActiveUsers);

    // const findUser = await User.findOne({ name: "Nahid" });
    // console.log(findUser);

    // const getLastCreatedUserByUserId = await User.findById(newUser._id);
    // console.log("find user: ", getLastCreatedUserByUserId);

    // const seletedUser = await User.find().select("name email -_id");
    // console.log(seletedUser);

    ///show 5 user and skip first one user
    // const limitUser = await User.find().limit(5).skip(1);
    // console.log(limitUser);

    ///sort user decending order (note: asc-> 1, desc-> -1)
    // const sortUser = await User.find().sort({ age: -1 });
    // console.log(sortUser);

    ///count active user
    // const countDocuments = await User.countDocuments({isActive: false});
    // console.log(countDocuments);

    // const deleteduser = await User.findByIdAndUpdate(newUser._id);
    // console.log("Deleted user data: ",deleteduser);

    //update user
    console.log("Created user: ", newUser);
    const updatedUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: {
          age: 80,
          name: "Mustofa Kamal",
        },
        $push: { tags: "updated" },
      },
      { new: true }
    );
    console.log("Updated user: ", updatedUser);
  } catch (error) {
    console.log("Error->", error);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();
