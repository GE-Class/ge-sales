module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER
  });

  return User;
};
