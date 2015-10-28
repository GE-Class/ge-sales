export default function($http){
  class Product {
    constructor(obj) {
      this.name = obj.name;
      this.cost = obj.cost;
      this.image = obj.image;
    }

    save(){
      return $http.post('/products', this);
    }

    static all(){
      return $http.get('/products');
    }

    static delete(id){
      return $http.delete('/products/' + id);
    }
  }

  return Product;
}
