const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const generateJWT = require("../utils/generateJWT");

const register = async (req, res, next) => {
  try {
    let Email = req.body.email;
    Email = Email.toString().toLowerCase().trim();
    const oldUser = await User.findOne({ email: Email });
    if (oldUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists", data: null });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      parentName: req.body.parentName,
      email: Email,
      password: hashedPassword,
      childName: req.body.childName,
      childAge: req.body.childAge,
    });
    await user.save();
    const userData = new User({
      parentName: req.body.parentName,
      email: Email,
      childName: req.body.childName,
      childAge: req.body.childAge,
    });
    res.status(201).json({
      success: true,
      message: "Account created successfully",
      data: { userData },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", data: null });
  }
};

const login = async (req, res, next) => {
  try {
    let Email = req.body.email;
    Email = Email.toString().toLowerCase().trim();
    const existingUser = await User.findOne({ email: Email });
    if (!existingUser) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
        data: null,
      });
    }
    const matchedPassword = await bcrypt.compare(
      req.body.password,
      existingUser.password,
    );
    if (!matchedPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
        data: null,
      });
    }
    const token = await generateJWT({
      _id: existingUser._id,
      email: Email,
    });
    return res
      .status(200)
      .json({ success: true, message: "login successfully", data: { token } });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error login", data: null });
  }
};

module.exports = {
  register,
  login,
};
