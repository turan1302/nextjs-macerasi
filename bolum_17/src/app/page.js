"use client";
import {useMemo, useState} from "react";

export default function Home() {
    const [numbers,setNumbers] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [filter,setFilter] = useState(5);

    const filteredNumbers = useMemo(()=>{
        console.log("Filtreleme İşlemi Yapılıyor");
        return numbers.filter(num=>num > filter);
    },[filter]);

    return (
        <div>
            <h1>useMemo Örneği</h1>
            <div>
                <label>Filtre Değeri: </label>
                <input type={"number"} value={filter} onChange={(e)=>setFilter(Number(e.target.value))}/>
            </div>
            <div>
                <h2>Filtrelenmiş Sayılar: </h2>
                <ul>
                    {filteredNumbers.map((num)=>(
                        <li key={num}>{num}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
