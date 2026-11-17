const { check } = require("express-validator");

const registerValidation = [
  check("parentName").notEmpty().withMessage("This field is required"),
  check("email")
    .notEmpty()
    .withMessage("This feild is required")
    .bail()
    .isEmail()
    .withMessage("This must be an email"),
  check("password")
    .notEmpty()
    .withMessage("This feild is required")
    .bail()
    .isLength({ min: 8 })
    .withMessage("The password must be at least 8 characters"),
  check("confirmPassword")
    .notEmpty()
    .withMessage("you must write the password again here")
    .bail()
    .custom((value, { req }) => {
      if (value === req.body.password) return true;
      else throw new Error(`Password doesn't match`);
    }),
  check("childName").notEmpty().withMessage("This feild is required"),
  check("childAge")
    .notEmpty()
    .withMessage("This feild is required")
    .bail()
    .isInt({ min: 4, max: 8 })
    .withMessage("The Age must be between 4 and 8 years old"),
];

const loginValidation = [
  check("email")
    .notEmpty()
    .withMessage("This feild is required")
    .bail()
    .isEmail()
    .withMessage("This must be an email"),
  check("password").notEmpty().withMessage("This feild is required"),
];

module.exports = {
  registerValidation,
  loginValidation
};
