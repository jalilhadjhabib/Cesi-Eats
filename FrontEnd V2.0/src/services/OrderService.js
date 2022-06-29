import http from "../../http-common";
class OrderService {
  getAll() {
    return http.get("/order/getall");
  }
  post(data){
    return http.post("/order/post",data);
  }
  delete(id){
    return http.delete(`/order/delete/${id}`);
  }
  updateStateRestaurateurOrder(id){
    return http.put(`/order/updateStateRestaurateurOrder/${id}`);
  }
  getAcceptedRestaurantOrder(state){
    return http.get(`/order/getAcceptedRestaurantOrder/${state}`);
  }
  updateStateLivreurOrder(id ,data){
    return http.put(`/order/updateStateLivreurOrder/${id}`,data);

  }
}
export default new OrderService();