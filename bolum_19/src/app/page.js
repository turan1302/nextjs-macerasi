"use client";
import {useLayoutEffect, useState} from "react";

export default function Home() {
    const [width,setWidth] = useState(0);
    const [height,setHeight] = useState(0);

    useLayoutEffect(()=>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    },[]);

    return (
        <div>
            <p>Ekran Genişliği: {width}px</p>
            <p>Ekran Yüksekliği: {height}px</p>
        </div>
    );
}
