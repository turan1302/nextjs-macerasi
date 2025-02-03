import React from 'react'

const wait = (ms)=>{
    return new Promise((resolve)=>setTimeout(resolve,ms));
}

const ContactPage = async () => {
    await wait(5000);

    return (
        <div>
            <p>
                Contact Page
            </p>
        </div>
    )
}

export default ContactPage
