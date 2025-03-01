class AppUrl{
    static baseURL = "http://127.0.0.1:8000/api";

    // todos
    static todos = this.baseURL+"/todos"; // GET
    static todos_create = this.baseURL+"/todos/create"; // POST
    static todos_change_status = this.baseURL+"/todos/change-status"; // GET
    static todos_edit = this.baseURL+"/todos/edit"; // GET
    static todos_update = this.baseURL+"/todos/update"; // POST
    static todos_delete = this.baseURL+"/todos/delete"; // GET
}

export default AppUrl;
