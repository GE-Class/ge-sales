export default function($scope, $state, User){
  User.findById($state.params.user_id).then(res => {
    $scope.user = res.data;
    drawChart($scope.user.Sales);
  });
}

function drawChart(sales){
  $('#chart').highcharts({
    title: {
      text: 'Items sold by User'
    },
    xAxis: {
       categories: sales.map(s => s.date)
    },
    series: [
     {
       data: sales.map(s => s.amount * 1)
     },
     {
       data: sales.map(s => s.Product.cost * 1)
     }
    ]
  });
}
