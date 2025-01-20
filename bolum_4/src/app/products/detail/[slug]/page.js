"use client";
import React from 'react';
import {useParams} from "next/navigation";

const ProductsDetailPage = () => {

    const params = useParams();
    console.log(params);

    return (
        <div>
            {params.slug}
        </div>
    )
}

export default ProductsDetailPage

