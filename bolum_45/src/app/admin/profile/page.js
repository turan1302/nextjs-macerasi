"use client";
import React, {useEffect, useState} from 'react'
import AuthLayout from "@/components/back/common/Layout/AuthLayout";
import Sidebar from "@/components/back/common/Sidebar";
import Navbar from "@/components/back/common/Navbar";
import Footer from "@/components/back/common/Footer";
import {inject, observer} from "mobx-react";
import RestClient from "@/RestAPI/RestClient";
import AppUrl from "@/RestAPI/AppUrl";
import Notification from "@/RestAPI/Notification";
import {useRouter} from "next/navigation";
import {Formik} from "formik";
import * as Yup from "yup";
import Link from "next/link";

const Profile = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [client, setClient] = useState({});

    const router = useRouter();

    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        await props.AuthStore.getToken();
        const token = (props.AuthStore.appState !== null) ? props.AuthStore.appState.user.access_token : null;

        await RestClient.getRequest(AppUrl.check, {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then((res) => {
            const result = res.data;
            const status = res.status;

            if (status === 200) {
                setIsLoading(false);
                setClient(result.data);
            } else {
                if (status === 401) {
                    props.AuthStore.removeToken();
                    router.push("/admin/login");
                } else {
                    props.AuthStore.removeToken();
                    router.push("/admin/login");
                }
            }

        }).catch((err) => {
            console.log(err);
            Notification.error({
                title: "Hata",
                message: "Hesap bilgileri listeleme işleminizde hata oluştu. Lütfen yönetici ile iletişime geçiniz"
            });
            props.AuthStore.removeToken();
            router.push("/admin/login");
        })
    }

    const _handleSubmit = (values, {resetForm, setSubmitting}) => {

    }

    return (
        <AuthLayout>
            {(isLoading) ? (
                <div>Yükleniyor</div>
            ) : (
                <>
                    <Sidebar/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Navbar/>

                            <div className="container-fluid">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Hesap Bilgilerim</h1>
                                </div>

                                <div className={"row"}>
                                    <div className={"col-lg-12"}>
                                        <div className={"card shadow mb-4"}>
                                            <div className={"card-header py-3"}>
                                                <h6 className={"m-0 font-weight-bold text-primary"}>Hesap
                                                    Bilgilerim</h6>
                                            </div>
                                            <div className={"card-body container-fluid"}>
                                                <Formik enableReinitialize={true} initialValues={{
                                                    name: client.name,
                                                    surname: client.surname,
                                                    email: client.email,
                                                    password: "",
                                                    password_confirmation: ""
                                                }}
                                                        validationSchema={Yup.object().shape({
                                                            name: Yup.string().required("Adınız alanı gereklidir"),
                                                            surname: Yup.string().required("Soyadınız alanı gereklidir"),
                                                            email: Yup.string().required("E-Mail Alanı Gereklidir").email("Lütfen Geçerli Bir E-Mail Adresi Giriniz !!!"),
                                                            password: Yup.string().min(8, "Şifreniz 8 Karakterden Az Olamaz").max(16, "Şifreniz 16 Karakterden Fazla Olamaz"),
                                                            password_confirmation: Yup.string().min(8, "Şifre (Tekrar) 8 Karakterden Az Olamaz").max(16, "Şifre (Tekrar) 16 Karakterden Fazla Olamaz").oneOf([Yup.ref("password"), null], "Şifreler eşleşmiyor")
                                                        })}
                                                        onSubmit={_handleSubmit}>
                                                    {({
                                                          touched,
                                                          errors,
                                                          values,
                                                          handleChange,
                                                          handleBlur,
                                                          handleSubmit,
                                                          isValid,
                                                          isSubmitting
                                                      }) => (
                                                        <form className={"form-group"} method={"POST"}>
                                                            <div className={"row"}>
                                                                <div className={"col-md-12"}>
                                                                    <label>Adınız</label>
                                                                    <input placeholder={"Adınız..."}
                                                                           value={values.name ?? ""}
                                                                           onChange={handleChange('name')}
                                                                           onBlur={handleBlur}
                                                                           name={"name"}
                                                                           className={"form-control"}/>
                                                                    {(touched.name && errors.name) &&
                                                                        <small
                                                                            className={"text-danger"}>{errors.name}</small>}
                                                                </div>
                                                                <div className={"col-md-12 mt-2"}>
                                                                    <label>Soyadınız</label>
                                                                    <input placeholder={"Soyadınız..."}
                                                                           value={values.surname ?? ""}
                                                                           onChange={handleChange('surname')}
                                                                           onBlur={handleBlur} name={"surname"}
                                                                           className={"form-control"}/>
                                                                    {(touched.surname && errors.surname) && <small
                                                                        className={"text-danger"}>{errors.surname}</small>}
                                                                </div>
                                                                <div className={"col-md-12 mt-2"}>
                                                                    <label>E-Mail Adresiniz</label>
                                                                    <input placeholder={"E-Mail Adresiniz..."}
                                                                           value={values.email ?? ""}
                                                                           onChange={handleChange('email')}
                                                                           onBlur={handleBlur} name={"email"}
                                                                           className={"form-control"}/>
                                                                    {(touched.email && errors.email) && <small
                                                                        className={"text-danger"}>{errors.email}</small>}
                                                                </div>
                                                                <div className={"col-md-12 mt-2"}>
                                                                    <label>Şifreniz</label>
                                                                    <input placeholder={"Şifreniz..."}
                                                                           type={"password"}
                                                                           onChange={handleChange('password')}
                                                                           onBlur={handleBlur} name={"password"}
                                                                           className={"form-control"}/>
                                                                    {(touched.password && errors.password) && <small
                                                                        className={"text-danger"}>{errors.password}</small>}
                                                                </div>
                                                                <div className={"col-md-12 mt-2"}>
                                                                    <label>Şifreniz (Tekrar)</label>
                                                                    <input placeholder={"Şifreniz (Tekrar)..."}
                                                                           type={"password"}
                                                                           onChange={handleChange('password_confirmation')}
                                                                           onBlur={handleBlur}
                                                                           name={"password_confirmation"}
                                                                           className={"form-control"}/>
                                                                    {(touched.password_confirmation && errors.password_confirmation) &&
                                                                        <small
                                                                            className={"text-danger"}>{errors.password_confirmation}</small>}
                                                                </div>
                                                            </div>
                                                            <div className={"row mt-3"}>
                                                                <div className={"col-md-4"}>
                                                                    <button disabled={(!isValid || isSubmitting)}
                                                                            onClick={handleSubmit} type={"button"}
                                                                            className={"btn btn-success btn-sm"}>
                                                                        <i className={"fa fa-edit"}></i> Güncelle
                                                                    </button>
                                                                    <Link href={"/admin"}
                                                                          className={"btn btn-danger btn-sm ml-3"}>
                                                                        <i className={"fa fa-times"}></i> Vazgeç
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    )}
                                                </Formik>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </>
            )}

        </AuthLayout>
    )
}

export default inject("AuthStore")(observer(Profile));
