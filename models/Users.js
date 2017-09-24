const sequelize = require("sequelize");
const Topics = require("./Topics");
const Messages = require("./Messages");

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users",
  {
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
  });

  Users.associate = function(models) {
    Users.hasMany(models.Topics,
    {
      foreignKey: {
        name: "created_by",
        allowNull: false
      }
    });
    Users.hasMany(models.Messages,
    {
      foreignKey: {
        name: "author_id",
        allowNull: false
      }
    });
  };

  return Users;
};