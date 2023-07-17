import { useState,createContext,useContext } from "react";

const UserContext = createContext();
function Component4()
{
    const [user, setUser]=useState("Neha");
    return(
        <>
        <UserContext.Provider value={user}>
            <Component5/>
        </UserContext.Provider>
        
        </>
    )
}

function Component5()
{
    const user=useContext(UserContext)
    return(
       <p>{user}</p>
    )
}
export default Component4;

