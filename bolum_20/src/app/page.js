"use client";
import {useRef} from "react";

export default function Home() {
    const divRef = useRef(null);

    const changeColor = () => {
        if (divRef.current) {
            divRef.current.style.backgroundColor = "red";
        }
    }

    return (
        <div>
            <h1>Renk Değiştirme</h1>
            <div ref={divRef} style={{
                width : '300px',
                height : '200px',
                backgroundColor : "orange"
            }}>
                Bu kutunun rengi değişecek
            </div>
            <button onClick={changeColor} style={{marginTop : "30px"}}>Rengi Değiştir</button>
        </div>
    );
}
