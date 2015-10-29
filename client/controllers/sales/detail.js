export default function($scope, $state, Sale){
  Sale.findById($state.params.sale_id).then(res => {
    $scope.sale = res.data;
  });
}
