export default function($scope, User){
  User.all().then(res => {
    $scope.users = res.data;
  });
}
