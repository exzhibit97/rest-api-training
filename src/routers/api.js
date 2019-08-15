const express = require("express");
const router = express.Router();

router.use(require("./vehicles"));
router.use(require("./types"));

module.exports = router;
