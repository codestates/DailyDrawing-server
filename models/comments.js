"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comments.belongsTo(models.User, {
        foreignKey: "User_Id",
      });
      models.Comments.belongsTo(models.Drawing, {
        foreignKey: "Drawings_id",
      });
    }
  }
  Comments.init(
    {
      Users_id: DataTypes.INTEGER,
      Drawings_id: DataTypes.INTEGER,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comments",
    }
  );
  return Comments;
};
