import React from 'react';


const Form = () => {
    
    const inputRef = React.createRef();
    const inputRef2= React.createRef();
    const inputRef3=React.createRef();

   function validate(){
    if(inputRef.current.value.length==0)
    {
      alert("Enter the Name")
    }
    if(inputRef3.current.value.length == 0)
    {
      alert("Enter the Password")
    }

   }
    

    return (
        <div className='container'>
        <form onSubmit={validate}>
            <h2>FORM VALIDATION</h2>
            
             <h3>Username</h3>
            <input type="text" name="username"ref={inputRef} placeholder='Enter Username'/>
            <h3>Password</h3>
            <input type="password"name="password" ref={inputRef2} placeholder='Enter Password'/>
            <button onSubmit={validate}>Submit</button>
            
        </form>
            
        </div>
    );
}

export default Form;
