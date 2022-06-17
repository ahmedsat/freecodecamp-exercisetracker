const express = require("express");
const router = express.Router({ mergeParams: true });

const { getLogs } = require("../controllers/logs");

router.get("/", getLogs);

module.exports = router;
