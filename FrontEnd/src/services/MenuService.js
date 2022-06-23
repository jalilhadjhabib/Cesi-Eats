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
  get(id){
    return http.get(`/menu/get/${id}`);
  }
  put(id,data){
    return http.put(`/menu/put/${id}`,data);
  }
}
export default new MenuService();