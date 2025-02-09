"use client";
import {useState} from "react";

export default function Home() {
    const [name, setName] = useState("Fatih");
    const [text, setText] = useState("");
    const [property, setProperty] = useState([]);

    return (
        <div>
            <p>
                Ana Page Component
            </p>
            <br/>
            <p>{name}</p>
            <p>
                <button onClick={() => setName("Muhammed")}>İsim Değiştir</button>
            </p>
            <hr/>
            <p>Text Input Değeri: {text}</p>
            <p>
                <input onChange={(e) => setText(e.target.value)}/>
            </p>
        </div>
    );
}
