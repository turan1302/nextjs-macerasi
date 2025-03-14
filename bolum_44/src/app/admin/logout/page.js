"use client";
import React, {useEffect} from 'react'
import AuthLayout from "@/components/back/common/Layout/AuthLayout";
import {inject, observer} from "mobx-react";
import {useRouter} from "next/navigation";
import RestClient from "@/RestAPI/RestClient";
import AppUrl from "@/RestAPI/AppUrl";
import Notification from "@/RestAPI/Notification";

const Logout = (props) => {
  const router = useRouter();

  useEffect(() => {
    doLogout();
  }, []);

  const doLogout = async ()=>{
    await props.AuthStore.getToken();
    const token = (props.AuthStore.appState !== null) ? props.AuthStore.appState.user.access_token : null;

    await RestClient.getRequest(AppUrl.logout,{
      headers : {
        "Authorization" : "Bearer "+token
      }
    }).then((res)=>{
      Notification.success({
        title : "Başarılı",
        message : "Çıkış İşlemi Başarılı"
      })
      props.AuthStore.removeToken();
      router.push("/admin/login");
    }).catch((err)=>{
      console.log(err);
      Notification.error({
        title : "Hata",
        message : "Çıkış işleminizde hata oluştu. Lütfen yönetici ile iletişime geçiniz"
      });
     // props.AuthStore.removeToken();
    })
  }

  return (
    <AuthLayout>

    </AuthLayout>
  )
}

export default inject("AuthStore")(observer(Logout));
