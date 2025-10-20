"use client"

import { useState } from "react"



export default function Counter(){

    let [count,setCount] = useState(0)

    return(
        <>
        <h3>Count:{count}</h3>

        <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={()=>setCount(count + 1)}>Increase</button>
        
        </>
    )
}