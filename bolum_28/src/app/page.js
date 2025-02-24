"use client";
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Table} from "react-bootstrap";
import RestClient from "@/RestAPI/RestClient";
import AppUrl from "@/RestAPI/AppUrl";
import Notifications from "@/RestAPI/Notifications";

export default function Home() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = async () => {
        setIsLoading(true);
        await RestClient.getRequest(AppUrl.todos).then((res) => {
            const result = res.data;
            const status = res.status;
            if (status === 200) {
                setItems(result.data);
                setIsLoading(false);
            } else {
                Notifications.error({
                    title: result.title,
                    message: result.message
                });
            }
        }).catch((err) => {
            console.log(err);
            Notifications.error({
                title: "Hata",
                message: "Sunucu bazlı bir hata oluştu. Lütfen yönetici ile iletişime geçiniz !!!"
            })
        })
    }

    const removeItem = (id) => {
        Notifications.delete().then((result) => {
            if (result.isConfirmed) {
                let newItems = items.filter((item) => item.td_id !== id)
                setItems(newItems)
            }

            removeItemAPI(id);
        })
    }

    const removeItemAPI = async (id) => {
        await RestClient.getRequest(AppUrl.todos_delete + `/${id}`).then((res) => {
            const result = res.data;
            const status = res.status;

            if (status === 200) {
                Notifications.success({
                    title: result.title,
                    message: result.message
                })

            } else {
                if (status === 404) {
                    Notifications.error({
                        title: result.title,
                        message: result.message
                    })
                } else {
                    Notifications.error({
                        title: result.title,
                        message: result.message
                    })
                }
            }
        }).catch((err) => {
            console.log(err);
            Notifications.error({
                title: "Hata",
                message: "Sunucu bazlı bir hata oluştu. Lütfen yönetici ile iletişime geçiniz !!!"
            })
        })
    }

    const renderItem = (items) => {
        return items.map((item, index) => (
            <tr key={index}>
                <td>{item.td_id}</td>
                <td>{item.td_name}</td>
                <td>
                    <Button
                        className={`badge badge-${item.td_status ? 'success' : 'danger'}`}>{item.td_status ? "Yapıldı" : "Yapılmadı"}</Button>
                </td>
                <td>
                    <Button onClick={() => removeItem(item.td_id)}
                            className={"btn btn-danger"}>Sil</Button>
                </td>
            </tr>
        ))
    }

    const noRecords = ()=>{
        return (
            <tr>
                <td colSpan={12}>
                    <div className={"alert alert-danger text-center"}>
                        Herhangi bir kayıt bulunamadı
                    </div>
                </td>
            </tr>
        )
    }

    return (
        isLoading ? (
            <div>Yükleniyor...</div>
        ) : (
            <div className={"container-fluid mt-lg-5"}>
                <h1 className={"text-center mb-4"}>To-Do List</h1>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>To-Do Adı</th>
                        <th>Durum</th>
                        <th>İşlemler</th>
                    </tr>
                    </thead>
                    <tbody>
                    {(items.length >= 1) ? (
                        renderItem(items)
                    ) : (
                       noRecords()
                    )}
                    </tbody>
                </Table>
            </div>
        )
    );
}
