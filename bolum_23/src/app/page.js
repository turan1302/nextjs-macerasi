"use client";
import React, {useState} from "react";

export default function Home() {
    const [metin, setMetin] = useState("test");

    const handleInput = (e) => {
        setMetin(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Başarıyla Gönderildi");
    }

    return (
        <div>
            <p>
                Metniniz: {metin}
            </p>
            <input type={"text"} onChange={handleInput} placeholder={"Metin Giriniz..."}/>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input type={"text"} onChange={handleInput} placeholder={"Form Verisi Giriniz..."}/>
                <br/><br/>
                <button disabled={true} type={"submit"}>Gönder</button>
            </form>
            <hr/>
            <input type={"text"} placeholder={"Focus/Blur Input"} onBlur={()=>console.log("Input'tan Blur Olundu")} onFocus={()=>console.log("Input'a Focus Olundu")}/>
        </div>
    );
}
