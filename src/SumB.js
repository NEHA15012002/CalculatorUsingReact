import React from "react";
let sum =0;

function SumB()
{    
  
   
    const inputRef = React.createRef();
    const inputRef2 = React.createRef();
    function display()
    {
        //inputRef.current.focus()
        sum =parseInt(inputRef.current.value) + parseInt(inputRef2.current.value);
        alert(sum);
        //inputRef.current.style.backgroudColor="red";
    }
   
   


   
    return (
       <>
       <form onSubmit={display}>
        <input type = "text" name="name" ref={inputRef}/>
        <input type = "text" name="name2" ref={inputRef2}/>
        <button onClick={display}>Click</button>
        </form>
        </>
    )
}

export default SumB;