import http from "../../http-common";
class ArticleService {
  getAll() {
    return http.get("/article/getall");
  }
  post(data){
    return http.post("/article/post",data);
  }
  delete(id){
    return http.delete(`/article/delete/${id}`);
  }
  getbymenu(id){
    return http.get(`/article/getbymenu/${id}`);
  }
}
export default new ArticleService();