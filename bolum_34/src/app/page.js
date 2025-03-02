"use client";
import {useState} from "react";
export default function Home() {
    const [color, setColor] = useState("red");

    const divStyle = {
        width: "200px",
        height: "200px",
        backgroundColor: color,
        borderRadius: "20px",
        padding: "20px"
    }

    return (
        <div>
            <h1>Style Kullanımı</h1>
            <hr/>
            <div style={divStyle}>
                Stil divi
            </div>
            <hr/>
            <button onClick={() => setColor("orange")}>Renk Değiştir</button>
        </div>
    );
}
