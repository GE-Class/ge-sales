export default function($http){
  class User {
    constructor(obj) {
      this.name = obj.name;
      this.title = obj.title;
      this.age = obj.age;
      this.gender = obj.gender;
    }

    save(){
      return $http.post('/users', this);
    }

    static all(){
      return $http.get('/users');
    }
  }

  return User;
}
