const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:ramanuj@cluster0.5awwtbg.mongodb.net/");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
