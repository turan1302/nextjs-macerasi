"use client";
import {useEffect, useState} from "react";

export default function Home() {
    const [count,setCount] = useState(0);
    const [list,setList] = useState(["ali","veli"]);

    useEffect(()=>{
      //  alert("Çalıştı"); // component did mount
    },[]);

    useEffect(() => {
        console.log("Sayaç Değişti");  // component did update
    }, [count]);

    useEffect(() => {
        return ()=>{
            setList([]);  // component will unmount
        }
    }, []);

  return (
      <div>
          <p>
              Ana Page Component
          </p>
          <br/>
          <p>Sayaç Değeri: {count}</p>
          <hr/>
          <button onClick={()=>setCount(count + 1)}>Artır</button>
          <button onClick={()=>setCount(count - 1)}>Azalt</button>
      </div>
  );
}
