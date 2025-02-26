"use client";
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Table} from "react-bootstrap";
import RestClient from "@/RestAPI/RestClient";
import AppUrl from "@/RestAPI/AppUrl";
import Notifications from "@/RestAPI/Notifications";
import {Formik} from "formik";
import * as Yup from "yup";
import "./toggle.css";

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

    const _handleSubmit = (values, {resetForm, setSubmitting, setErrors}) => {
        let newItems = [{
            ...values,
            td_id: items.length > 0 ? items[1].td_id + 2 : 1,  // ID Güncellemesi yapıldı
            td_status: 0
        }, ...items]

        setItems(newItems);
        resetForm();
        setSubmitting(false);
        setErrors({});

        createItemAPI(values);
    }

    const createItemAPI = async (values) => {
        await RestClient.postRequest(AppUrl.todos_create, values).then((res) => {
            const result = res.data;
            const status = res.status;

            if (status === 201) {
                Notifications.success({
                    title: result.title,
                    message: result.message
                });
            } else {
                if (status === 422) {
                    Notifications.error({
                        title: "Dikkat!",
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


    const changeStatus = (id)=>{
        let newItems = items.map((item)=>{
            if (item.td_id===id){
                item.td_status = (!item.td_status===false) ? 0 : 1
            }

            return item;
        })

        setItems(newItems);
        changeStatusAPI(id);
    }

    const changeStatusAPI = async (id)=>{
        await RestClient.getRequest(AppUrl.todos_change_status + `/${id}`).then((res) => {
            const result = res.data;
            const status = res.status;

            if (status === 200) {

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
                    <label className="switch">                                                              {/* status kısmı güncellendi */}
                        <input type="checkbox" onChange={()=>changeStatus(item.td_id)} defaultChecked={item.td_status===1}/>
                        <span className="slider round"></span>
                    </label>
                </td>
                <td>
                    <Button onClick={() => removeItem(item.td_id)}
                            className={"btn btn-danger"}>Sil</Button>
                </td>
            </tr>
        ))
    }

    const noRecords = () => {
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

                <Formik initialValues={{
                    td_name: ""
                }}
                        validationSchema={Yup.object().shape({
                            td_name: Yup.string().required("To-do Başlığı boş bırakılamaz").max(255, "To-do Başlığı 255 karakterden fazla olamaz")
                        })}
                        onSubmit={_handleSubmit}>
                    {({
                          touched,
                          errors,
                          values,
                          handleBlur,
                          handleSubmit,
                          handleChange,
                          isValid,
                          isSubmitting
                      }) => (
                        <Form className={"mb-5"} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>To-do Başlığı</Form.Label>
                                <Form.Control value={values.td_name} name={"td_name"} onChange={handleChange('td_name')}
                                              onBlur={handleBlur}
                                              type="text" placeholder="Todo Başlığı Giriniz..."/>
                                {(touched.td_name && errors.td_name) && (
                                    <small className={"text-danger"}>{errors.td_name}</small>)}
                            </Form.Group>

                            <Button disabled={(!isValid || isSubmitting)} variant="success" type="submit">
                                Yeni To-do Ekle
                            </Button>
                        </Form>
                    )}
                </Formik>


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
