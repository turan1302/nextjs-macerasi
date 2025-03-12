class AppUrl {
    static imageUrl = "http://127.0.0.1:8000/storage/";
    static baseURL = "http://127.0.0.1:8000/api/web";

    // auth
    static register = this.baseURL + "/admin/register";
    static login = this.baseURL + "/admin/login";
    static logout = this.baseURL + "/admin/logout";
    static check = this.baseURL + "/admin/check";
    static profile = this.baseURL + "/admin/profile";
    static update = this.baseURL + "/admin/update-profile";
}

export default AppUrl;
