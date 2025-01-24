"use client";
import React from 'react';
import {useParams} from "next/navigation";

const ProductsDetailPage = () => {

    const params = useParams();

    return (
        <div>
            {params.slug[0]+" "+params.slug[1]}
        </div>
    )
}

export default ProductsDetailPage

