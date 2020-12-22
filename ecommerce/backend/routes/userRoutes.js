const express = require("express");
const router = express.Router();
const { authUser } = require("../controlers/userControler");

router.post("/login", authUser);

module.exports = router;
