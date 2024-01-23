const express = require("express");
const zod = require("zod");
const User = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = require("../config");
const router = express.Router();

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signup", async (req, res) => {
  const body = req.body;

  const { success } = signupSchema.safeParse(body);

  if (!success) {
    return res.json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = await User.create(body);

  const token = jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRET_KEY
  );

  res.json({
    message: "User created successfully",
    token: token,
  });
});

router.post("/signin", async (req, res) => {
  const body = req.body;

  const { success } = signinSchema.safeParse(body);

  if (!success) {
    return res.json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: body.username,
    password: body.password,
  });
});

module.exports = {
  router,
};
