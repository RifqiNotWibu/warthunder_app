'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Features extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Features.init({
    featureName: DataTypes.STRING,
    featureDesc: DataTypes.STRING,
    featureScore: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Features',
  });
  return Features;
};