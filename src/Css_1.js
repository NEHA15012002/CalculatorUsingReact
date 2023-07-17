import React, { useState } from "react";
import "./Css.css";

function Css_1()
{    
  
    const obj={
        backgroundColor: "blue",
        fontSize:"50px",
        padding:"20px"
    }
  
   const[color,setColor]=useState("red");
   //
   
   const[car,setCar]=useState(
    {
        color:"red",
        brand:"Ford",
        price:24456667
    }
   )

  const change=()=>{
    setCar((previousState)=>{
      return {...previousState,color:"blue",brand:"maruti"}
    })
  }
   
    return (
       <>
       <p style={{color:"green",fontSize:"40px"}}> Some test</p>
       <p style={obj}>Internal</p>
       <p > hello </p>
       <p>{color}</p>
       <p>{car.color}-{car.brand}-{car.price}</p>
       <button onClick={change}>Click</button>
       </>
    )
}

export default Css_1;