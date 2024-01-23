const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:ramanuj@cluster0.5awwtbg.mongodb.net/paytm"
);

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  balance: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
  Account,
};
