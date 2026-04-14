const { AirplaneRepository } = require("../repositories");
const { Logger } = require("../config/logger-config");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    console.log("Inside service");
    return await airplaneRepository.create(data);
  } catch (error) {
    Logger.error("Something went wrong in the service layer");
    throw { error };
  }
}

module.exports = {
  createAirplane,
};
