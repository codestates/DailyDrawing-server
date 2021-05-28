"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DrawingsTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.DrawingsTag.belongsTo(models.Tag, {
        foreignKey: "Tags_id",
      });
      models.DrawingsTag.belongsTo(models.Drawing, {
        foreignKey: "Drawings_id",
      });
    }
  }
  DrawingsTag.init(
    {
      Tags_id: DataTypes.INTEGER,
      Drawings_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DrawingsTag",
    }
  );
  return DrawingsTag;
};
