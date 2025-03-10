"use client";
import React from 'react'
import PropTypes from "prop-types";


const Selamla = (props) => {

    const {fonksiyon,mesaj} = props;

    return (
        <div className={"my-5"}>
            <button onClick={()=>fonksiyon(mesaj)} className={"btn btn-success btn-sm"}>Selamla !!</button>
        </div>
    )
}

Selamla.propTypes = {
    mesaj : PropTypes.string.isRequired,
    fonksiyon : PropTypes.func.isRequired
}

export default Selamla
