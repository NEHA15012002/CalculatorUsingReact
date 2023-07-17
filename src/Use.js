import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import About from "./About";
import Contact from "./ContactUs";

function Use()  {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>

    )
}

export default Use;
