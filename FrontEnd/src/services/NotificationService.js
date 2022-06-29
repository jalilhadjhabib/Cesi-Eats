import http from "../../http-common";

class NotificationService {
  getAll() {
    return http.get("/notification/getall");
  }
  post(data){
    return http.post("/notification/post",data);
  }
  
}
export default new NotificationService();