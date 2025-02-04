import React from 'react'

const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
const ProductPage = async () => {

    await wait(3000);

    return (
        <div>
            <p>
                Ürün Detay
            </p>
        </div>
    )
}

export default ProductPage
