export default function($http){
  class Sale {
    constructor(obj) {
      this.user_id = obj.user_id * 1;
      this.product_id = obj.product_id * 1;
      this.date = obj.date;
      this.amount = obj.amount;
      this.quantity = obj.quantity;
    }

    save(){
      return $http.post('/sales', this);
    }

    static findById(id){
      return $http.get('/sales/' + id);
    }

    static all(){
      return $http.get('/sales');
    }

    static delete(id){
      return $http.delete('/sales/' + id);
    }
  }

  return Sale;
}
