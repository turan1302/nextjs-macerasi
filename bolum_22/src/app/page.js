"use client";
import React from "react";

export default function Home() {
    return (
        <div>
            <button onClick={() => alert("Butona Tıklandı")}>Butona Tıklandı</button>
            <br/>
            <button onMouseDown={() => alert("Fare Basıldı")}>Fare Basıldı</button>
            <br/>
            <button onMouseUp={() => alert("Fare Bırakıldı")}>Fare Bırakıldı</button>
            <br/>
            <button onDoubleClick={() => alert("Çift Tıklandı")}>Çift Tıklandı</button>
            <br/>
            <button onMouseEnter={() => alert("Fare Üzerimde")}>Fare Üzerine Geldi</button>
            <br/>
            <button onMouseLeave={() => alert("Fare Üzerinden Gitti")}>Fare Üzerinden Gitti</button>
            <br/>
            <br/>
            <br/>

            <div onContextMenu={(e)=>{
               e.preventDefault();
               alert("Sağ tıklama olayı gerçekleşti !!!")
            }}>
                İçeriğimiz Burada Mevcut
            </div>
        </div>
    );
}
