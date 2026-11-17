const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");
const validation = require("../validation/authValidation");
const validateRequest = require("../middleware/vaildationRequest");

router.route("/register").post(
  validation.registerValidation,
  validateRequest,
  authController.register
);

router.route("/login").post( validation.loginValidation,
  validateRequest,
  authController.login);

router.route("/test").get(verifyToken, (req, res)=>{
  res.status(200).json({message: "Access granted"})
})


module.exports = router;
