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
  get(id){
    return http.get(`/article/get/${id}`);
  }
  put(id,data){
    return http.put(`/article/put/${id}`,data);
  }
}
export default new ArticleService();