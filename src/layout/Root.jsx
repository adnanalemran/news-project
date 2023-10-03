import { Outlet } from "react-router-dom";
import Navbar from "../pages/sheard/navbar/Navbar";

 
const Root = () => {
    return (
        <div className="max-w-4xl mx-auto font-poppins">
        
            <Outlet/>
        </div>
    );
};

export default Root; 