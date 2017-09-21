// module.exports = function(sequelize, DataTypes) {
//   var Topics = sequelize.define("Topics", {
//     name: DataTypes.TEXT,
//   }, {
//     classMethods: {
//       associate: function(models) {

//       }
//     }
//   });

//   return Topics;
// };

const sequelize = require('sequelize');
const Users = require('./Users');
const Messages = require('./Messages');

module.exports = function(sequelize, DataTypes) {
  var Topics = sequelize.define('Topics',
  {
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
  });

  Topics.associate = function(models) {
    Topics.belongsTo(models.Users,
    {
      foreignKey: {
        name: 'created_by',
        allowNull: false
      }
    });

    Topics.hasMany(models.Messages,
    {
      foreignKey: {
        name: 'topic_id',
        allowNull: false
      }
    });
  };

  return Topics;
};