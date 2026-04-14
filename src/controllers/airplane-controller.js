const { StatusCodes } = require("http-status-codes");

const { AirplaneService } = require("../services");

async function createAirplane(req, res) {
  try {
    console.log("inside create airplane controller");
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Airplane created successfully",
      data: airplane,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to create airplane",
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createAirplane,
};
