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

    const renderItem = (items) => {
        return items.map((item, index) => (
            <tr key={index}>
                <td>{item.td_id}</td>
                <td>{item.td_name}</td>
                <td>
                    <Button
                        className={`badge badge-${item.td_status ? 'success' : 'danger'}`}>{item.td_status ? "Yapıldı" : "Yapılmadı"}</Button>
                </td>
            </tr>
        ))
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
                    </tr>
                    </thead>
                    <tbody>
                    {(items.length >= 1) && (
                        renderItem(items)
                    )}
                    </tbody>
                </Table>
            </div>
        )
    );
}
