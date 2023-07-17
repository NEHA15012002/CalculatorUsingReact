import { useState } from "react";

function Component1()
{
    const[user,setUser]=useState("Jesse Hall");
    return(
   <>
   <h1>{user}</h1>
   <Component2 user ={user}/>
   </>
    )
}

function Component2({user})
{
    
    return(
   <>
   <h1>Component2</h1>
   <Component3 user ={user}/>
   </>
    )
}

function Component3({user})
{
    
    return(
   <>
   <h1>{user}</h1>
   
   </>
    )
}
export default Component1;