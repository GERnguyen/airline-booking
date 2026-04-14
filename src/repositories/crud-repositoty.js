const { Logger } = require("../config/logger-config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      console.log("Inside repo");
      const respone = await this.model.create(data);
      return respone;
    } catch (error) {
      Logger.error("Error in CrudRepository create method", error);
      throw error;
    }
  }

  async destroy(data) {
    try {
      const respone = await this.model.destroy({
        where: { id: data },
      });
      return respone;
    } catch (error) {
      Logger.error("Error in CrudRepository destroy method", error);
      throw error;
    }
  }

  async get(data) {
    try {
      const respone = await this.model.findByPk(data);
      return respone;
    } catch (error) {
      Logger.error("Error in CrudRepository get method", error);
      throw error;
    }
  }

  async getAll() {
    try {
      const respone = await this.model.findAll();
      return respone;
    } catch (error) {
      Logger.error("Error in CrudRepository getAll method", error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const respone = await this.model.update(data, {
        where: { id: id },
      });
      return respone;
    } catch (error) {
      Logger.error("Error in CrudRepository update method", error);
      throw error;
    }
  }
}

module.exports = CrudRepository;
