"use client";
import React, {useEffect, useState} from 'react'
import {Formik} from "formik";
import * as Yup from "yup";
import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import {useParams, useRouter} from "next/navigation";
import RestClient from "@/RestAPI/RestClient";
import AppUrl from "@/RestAPI/AppUrl";
import Notifications from "@/RestAPI/Notifications";

const Edit = (props) => {
    const params = useParams();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [todo, setTodo] = useState({});

    useEffect(() => {
        getTodo();
    }, []);

    const getTodo = async () => {
        setIsLoading(true);
        await RestClient.getRequest(AppUrl.todos_edit + `/${params.id}`).then((res) => {
            const result = res.data;
            const status = res.status;

            if (status === 200) {
                setIsLoading(false);
                setTodo(result.data)
            } else {
                if (status === 404) {
                    Notifications.error({
                        title: result.title,
                        message: result.message
                    });
                    router.push("/");
                } else {
                    Notifications.error({
                        title: result.title,
                        message: result.message
                    });
                    router.push("/");
                }
            }

        }).catch((err) => {
            console.log(err);
            Notifications.error({
                title: "Hata",
                message: "Sunucu bazlı bir hata oluştu. Lütfen yönetici ile iletişime geçiniz !!!"
            })
            router.push("/");
        })
    }

    const _handleSubmit =  async (values,{setSubmitting,setErrors}) => {
        await RestClient.postRequest(AppUrl.todos_update+`/${params.id}`,values).then((res)=>{
            const result = res.data;
            const status = res.status;

            if (status===200){
                Notifications.success({
                    title: result.title,
                    message: result.message
                });
            }else{
                if (status===422){
                    Notifications.error({
                        title: result.title,
                        message: result.message
                    });
                }else{
                    Notifications.error({
                        title: result.title,
                        message: result.message
                    });
                }
            }

            setSubmitting(false);
            setErrors({});

        }).catch((err)=>{
            Notifications.error({
                title: "Hata",
                message: "Sunucu bazlı bir hata oluştu. Lütfen yönetici ile iletişime geçiniz !!!"
            });
            setSubmitting(false);
            setErrors({});
        })
    }

    return (
        isLoading ? (
            <div>Yükleniyor...</div>
        ) : (
            <div className={"container-fluid mt-lg-5"}>
                <h1 className={"text-center mb-4"}>To-Do Güncelle</h1>

                <Formik enableReinitialize={true} initialValues={{
                    td_name: todo.td_name
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
                                To-Do Güncelle
                            </Button>

                            <Link href={"/"} className={"btn btn-danger ml-2"}>
                                Ana Sayfaya Dön
                            </Link>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    )
}

export default Edit
