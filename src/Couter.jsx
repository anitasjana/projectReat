import React, { useState } from "react";

export default function Counter(){
    // const[count,setCount]=useState(0);

    <button onClick={()=>count+1}>+</button>
    return(
        <div>
              <p style={{color : "white"}}>count : {count}</p>
        <button onClick={()=>setCount(count+1)}>+</button> <br />
        <button onClick={()=>setCount(count-1)}>-</button> <br />
        <button onClick={()=>setCount(0)}>Reset</button>

        </div>
      
    )
};