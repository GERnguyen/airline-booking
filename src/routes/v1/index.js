const express = require("express");

const { InforController } = require("../../controllers");

const airplaneRoutes = require("./airplane-routes");

const router = express.Router();

console.log("Inside v1 routes");

router.get("/info", InforController.info);
router.use("/airplanes", airplaneRoutes);

module.exports = router;
