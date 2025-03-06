"use client";
import React from 'react'

const Selamla = (props) => {

    const {fonksiyon,mesaj} = props;

    return (
        <div className={"my-5"}>
            <button onClick={()=>fonksiyon(mesaj)} className={"btn btn-success btn-sm"}>Selamla !!</button>
        </div>
    )
}

export default Selamla
