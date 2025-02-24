class AppUrl{
    static baseURL = "http://127.0.0.1:8000/api";

    // todos
    static todos = this.baseURL+"/todos";
    static todos_delete = this.baseURL+"/todos/delete";
}

export default AppUrl;
