module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    cost: DataTypes.DECIMAL
  });

  return Product;
};
