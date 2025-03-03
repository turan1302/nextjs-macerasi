"use client";
import {useState} from "react";
import "../styles/global.css";

export default function Home() {
    const [message,setMessage] = useState("Next.js Class Tanımlama");
    const [isClicked,setIsClicked] = useState(false);

    const buttonClick = ()=>{
        setMessage("Tıklandı!");
        setIsClicked(!isClicked);
    }

    return (
        <div>
            <h1>Class Kullanımı</h1>
            <hr/>
            <div className={"container"}>
                <h3 className={(isClicked) ? "messageClicked" : "message"}>{message}</h3>
                <button className={"button"} onClick={buttonClick}>Tıkla!</button>
            </div>
        </div>
    );
}
