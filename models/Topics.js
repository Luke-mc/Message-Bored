module.exports = function(sequelize, DataTypes) {
  var Topics = sequelize.define("Topics", {
    name: DataTypes.TEXT,
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return Topics;
};

