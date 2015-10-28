export default function($scope, $state, Product){
  $scope.add = function(){
    let p = new Product(this.product);
    p.save().then(res => {
      $state.go('products');
    });
  };
}
