const express = require("express");
const router = express.Router();

const { getPublicTokens, createToken } = require("../controllers/tokens");

router.route("/").get(getPublicTokens);
router.route("/").post(createToken);

module.exports = router;
