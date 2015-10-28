export default function($scope, User){
  User.all().then(res => {
    console.log('the data is', res);
  });
}
