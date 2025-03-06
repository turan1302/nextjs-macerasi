"use client";
import React from 'react'
import Sidebar from "@/components/back/common/Sidebar";
import Navbar from "@/components/back/common/Navbar";
import Footer from "@/components/back/common/Footer";
import Report from "@/components/back/report";
import Selamla from "@/components/back/home";

const AdminPage = () => {

    const selamla = (mesaj)=>{
        alert(mesaj)
    }

    return (
        <>
            <Sidebar/>

            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">

                    <Navbar/>

                    <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Anasayfa</h1>
                        </div>


                        <Selamla mesaj={"Hayırlı Ramazanlar :)"} fonksiyon={selamla}/>

                        <Report aylik={"300.000"} haftalik={"75.000"} bekleyen_gorev={70} onaylanan_istek={30}/>

                    </div>

                </div>

                <Footer/>
            </div>
        </>
    )
}

export default AdminPage
