const express = require("express");
const { register, login } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);   // ← Add this line
router.post("/login", login);

module.exports = router;
