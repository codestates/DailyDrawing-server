"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Drawing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Drawing.belongsTo(models.User, {
        foreignKey: "Users_Id",
      });
      models.Drawing.hasMany(models.Comments, {
        foreignKey: "Drawings_id",
      });
      models.Drawing.hasMany(models.Like, {
        foreignKey: "Drawings_id",
      });
      models.Drawing.hasMany(models.DrawingsTag, {
        foreignKey: "Drawings_id",
      });
    }
  }
  Drawing.init(
    {
      title: DataTypes.STRING,
      DrawingImg: DataTypes.STRING,
      description: DataTypes.STRING,
      isCompleted: DataTypes.BOOLEAN,
      Users_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Drawing",
    }
  );
  return Drawing;
};
