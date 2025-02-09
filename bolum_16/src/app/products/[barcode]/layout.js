import React from 'react'

const ProductLayout = ({children, ...rest}) => {

    console.log(rest);

    return (
        <div>
            <h3>Product Header</h3>
            <div>
                {children}
            </div>
            <h3>Product Footer</h3>
        </div>
    )
}

export default ProductLayout
