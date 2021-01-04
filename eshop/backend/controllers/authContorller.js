const User = require("../models/user");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// #опис        Register a user
// #патека      POST /api/v1/register
// #пристап     Јавен
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "avatars/user_odi44a",
      url:
        "https://res.cloudinary.com/sauromanih/image/upload/v1609747930/avatars/user_odi44a.png",
    },
  });

  const token = user.getJwtToken()

  // The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource.
  res.status(201).json({
    success: true,
    token,
  });
});
