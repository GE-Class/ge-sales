export default function($scope, Sale){
  Sale.all().then(res => {
    $scope.sales = res.data;
  });
}
