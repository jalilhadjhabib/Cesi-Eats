import http from "../../http-common";
class NotificationService {
  getAll() {
    return http.get("/notification/getall");
  }
  post(data){
    return http.post("/notification/post",data);
  }
  getbyiduser(id){
    return http.get(`/notification/getbyiduser/${id}`);
  }
}
export default new NotificationService();