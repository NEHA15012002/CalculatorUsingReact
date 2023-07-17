import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function About()
{
    const navigate=useNavigate()
    const ChangePage=()=>{
        navigate("/Contact")
    }
   return (
    <button type="button" onClick={ChangePage}>Click</button>
   )


}




export default About;