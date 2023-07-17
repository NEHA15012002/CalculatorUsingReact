import React,{useState} from 'react';

const Login = () => {
   const[user,setUser]=useState("")
   const[password,setPassword]=useState("")
   const [userErr,setUserErr]=useState(false);
   const [passErr,setPassErr]=useState(false);

   function handlelogin(e)
   {
    if(user.length==0 || password.length<3)
        {
            setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
    e.preventDefault()
   }
   
   function userHandler(e){
    let item=e.target.value;
    if(item.length==0 )
    {
       setUserErr(true)
    }
    else
    {
        setUserErr(false)
    }
    setUser(item)
}



   function PassHandler(e){
    let item=e.target.value;
    if(item.length<5 && item.length!=0)
    {
       setPassErr(true);
    }
    else
    {
       setPassErr(false);
    }
   }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handlelogin}>
                <input type="text" placeholder='Enter the User Id' onChange={userHandler}/>{userErr?<span>User Not Valid</span>:""}
                <br ></br>
                <input type="password" placeholder='Enter the Password' onChange={PassHandler}/>{passErr?<span>Enter Password length greater than 5</span>:""}
                <br ></br>
                <button type ="submit" onSubmit={handlelogin}>Submit</button>

            </form>
        </div>
    );
}

export default Login;
