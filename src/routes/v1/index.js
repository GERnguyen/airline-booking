const express = require("express");

const { InforController } = require("../../controllers");

const router = express.Router();

router.get("/info", InforController.info);

module.exports = router;
