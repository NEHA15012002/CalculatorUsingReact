import About from "./About";
import ContactUs from "./ContactUs";
import App from "./App";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

function Merge()
{
    return (
        <BrowserRouter>
        <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/contact">Contact</Link></li>

        </ul>





        <Routes>
            <Route path ="/" element={<App/>}/>
            <Route path ="/about" element={<About/>}/>
            <Route path ="/contact" element={<ContactUs/>}/>
            {/* <Route path ="*" element={<ErrorPage/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}
export default Merge;