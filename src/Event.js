import React from "react";

let sqr =0;
function Demo()
{    const demo=()=>{
    alert("hello");
      }

      const demo2=function(){
        alert("hello");
          }



   function show()
   {
    alert("Welcome");
   }
  
   function show2(a)
   { 
    //  a.map(function(val){
    //     sqr= val*val;
    //     document.write(sqr + "<br>");
    //    })

    a.map((val)=>{
        document.write((val**2)+"<br>")

    })
    }
    //<button onClick={()=>show2([1,2,3,4])}>Click</button>
   //<button onClick={display}>Click</button>
    const inputRef = React.createRef();
    function display()
    {
        //inputRef.current.focus()
        alert(inputRef.current.value)
        //inputRef.current.style.backgroudColor="red";
    }
  
    return (
       <>
       <form onSubmit={display}>
        <input type = "text" name="name" ref={inputRef}/>
        <input type = "submit" name="submit" />
        </form>
        </>
    )
}

export default Demo;