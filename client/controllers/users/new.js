export default function($scope, User){
  $scope.add = function(){
    let u = new User(this.user);
    u.save();
  };
}
