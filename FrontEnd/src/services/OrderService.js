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
}
export default new OrderService();