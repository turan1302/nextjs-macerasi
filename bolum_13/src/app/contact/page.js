import React from 'react'

const wait = (ms)=>{
    return new Promise((resolve)=>setTimeout(resolve,ms));
}

const ContactPage = async ({searchParams}) => {
    await wait(3000);

    if (searchParams.error==="1"){
        throw new Error("Hata Var!!");
    }

    return (
        <div>
            <p>
                Contact Page
            </p>
        </div>
    )
}

export default ContactPage
