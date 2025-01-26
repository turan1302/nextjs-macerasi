import React from 'react'
import Link from "next/link";

const ProductsPage = () => {

    const products = [
        {
            id : 1,
            name : "Macbook Pro",
            slug : "macbook-pro"
        },
        {
            id : 2,
            name : "Casper Excalibur",
            slug : "casper-excalibur"
        }
    ]

    return (
        <div>
            {products.map((item,index)=>(
                <li key={index} style={{listStyle : "none"}}>
                <Link href={"/products/detail/"+item.slug}>
                    {item.name}
                </Link>
                </li>
            ))}
        </div>
    )
}

export default ProductsPage

