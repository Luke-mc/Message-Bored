module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.TEXT,
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return User;
};

