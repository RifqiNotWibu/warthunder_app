"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tanks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tankName: {
        type: Sequelize.STRING,
      },
      turretId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Turrets",
          key: "id",
        },
      },
      armorScore: {
        type: Sequelize.FLOAT,
      },
      engine: {
        type: Sequelize.INTEGER,
      },
      countryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Countries",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tanks");
  },
};
