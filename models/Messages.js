const sequelize = require('sequelize');
const Users = require('./Users');
const Topics = require('./Topics');

module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define("Messages",
  {
    body: { type: DataTypes.TEXT, allowNull: false}
  });

  Messages.associate = function(models) {
    Messages.belongsTo(models.Topics,
    {
      foreignKey: {
        name: 'topic_id',
        allowNull: false
      }
    });

    Messages.belongsTo(models.Users,
    {
      foreignKey: {
        name: 'author_id',
        allowNull: false
      }
    });
  };

  return Messages;
};