'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drawing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Drawing.init({
    title: DataTypes.STRING,
    DrawingImg: DataTypes.STRING,
    description: DataTypes.STRING,
    isCompleted: DataTypes.BOOLEAN,
    Users_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Drawing',
  });
  return Drawing;
};