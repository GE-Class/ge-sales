export default function($scope, User){
  User.all().then(res => {
    $scope.users = res.data;
  });

  $scope.delete = function(id){
    User.delete(id).then(res => {
      $scope.users = $scope.users.filter(u => u.id != res.data);
    });
  };
}
