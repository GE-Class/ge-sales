module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER
  },{
    classMethods: {
      associate: function(models){
        User.hasMany(models.Sale, {foreignKey: 'user_id'})
      }
    }
  });

  return User;
};
