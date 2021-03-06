const { Turrets } = require("../models");

class turretControllers {
  static async addTurret(req, res, next) {
    try {
      const { turretName, turretScore } = req.body;
      let addTurret = await Turrets.create({ turretName, turretScore });
      res.status(201).json({ status: "Turret successfully added." });
    } catch (err) {
      next(err);
    }
  }
  static async turretList(req, res, next) {
    try {
      let turretList = await Turrets.findAll({ raw: true });
      res.status(201).json(turretList);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = turretControllers;
