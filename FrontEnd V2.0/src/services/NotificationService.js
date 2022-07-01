import http from "../../http-common";

class NotificationService {
  getAll() {
    return http.get("/notification/getall");
  }
  getbyiduser(id){
    return http.get(`/notification/getbyiduser/${id}`);

  }
  post(data){
    return http.post("/notification/post",data);
  }
  
}
export default new NotificationService();