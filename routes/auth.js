const express = require("express");
const router = express.Router();
const { signin, signup, signout } = require("../controllers/auth");

router.get("/signup", signup);
router.get("/signin", signin);
router.get("/signout", signout);

module.exports = router;
