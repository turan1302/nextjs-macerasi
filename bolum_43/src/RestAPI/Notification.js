import Swal from "sweetalert2";

class Notification {
    static success = (data) => {
        return Swal.fire({
            title: data.title,
            text: data.message,
            icon: "success",
            confirmButtonText: "OK"
        })
    }

    static error = (data) => {
        return Swal.fire({
            title: data.title,
            text: data.message,
            icon: "error",
            confirmButtonText: "OK"
        })
    }

    static delete = ()=>{
        return Swal.fire({
            title: "Dikkat!",
            text: "Kayıt silinecektir. Onaylıyor musunuz?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Evet. Kaydı sil",
            cancelButtonText : "Vazgeç"
        })
    }
}

export default Notification;
