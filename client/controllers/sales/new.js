export default function($scope, $state, User, Product, Sale){

  User.all().then(res => {
    $scope.users = res.data;
  });

  Product.all().then(res => {
    $scope.products = res.data;
  });

  $scope.add = function(){
    let s = new Sale(this.sale);
    s.save().then(res => $state.go('sales'));
  };
}
