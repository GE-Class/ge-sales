module.exports = function(sequelize, DataTypes) {
  var Sale = sequelize.define("Sale", {
    date: DataTypes.DATEONLY,
    amount: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER
  },{
    classMethods: {
      associate: function(models){
        Sale.belongsTo(models.User, {foreignKey: 'user_id'}),
        Sale.belongsTo(models.Product, {foreignKey: 'product_id'})
      }
    }
  });

  return Sale;
};
