"use client";
import React from "react";
import {Formik} from "formik";
import * as Yup from "yup";

export default function Home() {

    const _handleSubmit=()=>{
        alert("Gönderildi");
    }

    return (
        <div>
            <Formik initialValues={{
                email : '',
                password : ''
            }}
                    validationSchema={Yup.object().shape({
                        email : Yup.string().required("E-Mail alanı gereklidir").email("Lütfen geçerli bir E-Mail adresi giriniz"),
                        password : Yup.string().required("Şifre alanı gereklidir").min(8,"Şifreniz 8 karakterden az olamaz").max(16,"Şifreniz 16 karakterden fazla olamaz")
                    })}
                    onSubmit={_handleSubmit}>
                {({
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isValid,
                    isSubmitting
                  })=> (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>E-Mail</label>
                            <br/>
                            <input value={values.email} onChange={handleChange('email')} onBlur={handleBlur} name={"email"} type={"text"} placeholder={"E-Mail Adresiniz..."}/>
                            <br/>
                            {(touched.email && errors.email) && (<small style={{color : "red"}}>{errors.email}</small>)}
                        </div>
                        <br/>
                        <div>
                            <label>Şifre</label>
                            <br/>
                            <input value={values.password} onChange={handleChange('password')} onBlur={handleBlur} name={"password"} type={"password"} placeholder={"Şifreniz..."}/>
                            <br/>
                            {(touched.password && errors.password) && (<small style={{color : "red"}}>{errors.password}</small>)}
                        </div>
                        <br/>
                        <div>
                            <button onClick={handleSubmit} disabled={!isValid || isSubmitting} type={"submit"}>Giriş Yap</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}
