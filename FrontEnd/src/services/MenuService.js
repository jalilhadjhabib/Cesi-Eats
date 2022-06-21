import http from "../../http-common";
class MenuService {
  getAll() {
    return http.get("/menu/getall");
  }
  post(data){
    return http.post("/menu/post",data);
  }
  delete(id){
    return http.delete(`/menu/delete/${id}`);
  }
}
export default new MenuService();