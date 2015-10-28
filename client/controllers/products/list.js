export default function($scope, Product){
  Product.all().then(res => {
    $scope.products = res.data;
  });

  $scope.delete = function(id){
    Product.delete(id).then(res => {
      $scope.products = $scope.products.filter(p => p.id != res.data);
    });
  };
}
