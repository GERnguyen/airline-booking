const CrudRepository = require("./crud-repositoty");

const { Airplane } = require("../models");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}

module.exports = AirplaneRepository;
