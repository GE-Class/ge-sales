module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    cost: DataTypes.DECIMAL
  },{
    classMethods: {
      associate: function(models){
        Product.hasMany(models.Sale, {foreignKey: 'product_id'})
      }
    }
  });

  return Product;
};
