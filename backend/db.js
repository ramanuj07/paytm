const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:ramanuj@cluster0.5awwtbg.mongodb.net/");

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
});

const userModel = mongoose.model("User", userSchema);

module.exports = {
  userModel: userModel,
};
