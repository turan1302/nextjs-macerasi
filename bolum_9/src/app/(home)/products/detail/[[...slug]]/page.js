"use client";
import React from 'react';
import {useParams} from "next/navigation";

const ProductsDetailPage = () => {

    const params = useParams();

    /*
       {params.slug[0]+" "+params.slug[1]}
     */

    return (
        <div>
            Parametresiz de çalışıyor :)
        </div>
    )
}

export default ProductsDetailPage

