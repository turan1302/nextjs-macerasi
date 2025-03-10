"use client"
import React from 'react'
import Sidebar from "@/components/back/common/Sidebar";
import Navbar from "@/components/back/common/Navbar";
import Footer from "@/components/back/common/Footer";
import Report from "@/components/back/report";
import Selamla from "@/components/back/home";
import {inject,observer} from "mobx-react";


const UsersPage = (props) => {

    const selamla = (mesaj)=>{
        alert(mesaj)
    }

    const {TestStore} = props;


    return (
        <>
            <Sidebar/>

            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">

                    <Navbar/>

                    <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Kullanıcılar</h1>
                        </div>

                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">{TestStore.value}</h1>
                        </div>

                        <button className={"btn btn-secondary btn-sm"} onClick={()=>TestStore.changeValue("Next.js Macerası")}>Güncelle</button>

                        <Selamla mesaj={"Hayırlı Ramazanlar :)"} fonksiyon={selamla}/>

                        <Report aylik={"240.000"} haftalik={"50.000"} bekleyen_gorev={50} onaylanan_istek={20}/>

                    </div>

                </div>

                <Footer/>
            </div>
        </>
    )
}

export default inject("TestStore")(observer(UsersPage));
