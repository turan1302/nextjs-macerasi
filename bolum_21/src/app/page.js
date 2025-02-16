"use client";
import React,{useState} from "react";
import useDebounce from "@/hooks/useDebounce";
export default function Home() {
    const [query,setQuery] = useState('');
    const debouncedQuery = useDebounce(query,1000);

    const handleChange = (e)=>{
        setQuery(e.target.value);
    }

    return (
        <div>
           <input type={"text"} value={query} onChange={handleChange} placeholder={"Arama Yap..."}/>
            <p>
                Debounced Değeri: {debouncedQuery}
            </p>
        </div>
    );
}
