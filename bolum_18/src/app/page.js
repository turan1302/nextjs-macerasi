"use client";

import {useCallback, useState} from "react";

export default function Home() {
    const [count,setCount] = useState(0);

    const increment = useCallback(()=>{
        setCount((prevCount)=>prevCount + 1);
    },[]);

    return (
        <div>
           <h1>Sayaç Değeri: {count}</h1>
            <button onClick={increment}>Artır</button>
        </div>
    );
}
