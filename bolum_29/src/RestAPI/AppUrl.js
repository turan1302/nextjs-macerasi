class AppUrl{
    static baseURL = "http://127.0.0.1:8000/api";

    // todos
    static todos = this.baseURL+"/todos"; // GET
    static todos_create = this.baseURL+"/todos/create"; // POST
    static todos_delete = this.baseURL+"/todos/delete"; // GET
}

export default AppUrl;
