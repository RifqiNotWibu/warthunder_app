const express = require("express");
const countryControllers = require("../controllers/countryControllers");
const router = express.Router();

const userControllers = require("../controllers/userControllers");
const countryRoutes = require("./countries");
const featureRoutes = require("./features");
const penetrationRoutes = require("./penetrations");
const shellRoutes = require("./shells");
const tankRoutes = require("./tanks");
const turretRoutes = require("./turrets");

router.post("/register", userControllers.register);

router.get("/showUsers", userControllers.userList); //Test sequelize

router.use("/country", countryRoutes);

router.use("/turret", turretRoutes);

module.exports = router;
