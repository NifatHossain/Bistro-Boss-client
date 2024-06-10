import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    const location= useLocation()
    const showNav= location.pathname.includes('register') || location.pathname.includes('login')

    return (
        <div>
            {
                !showNav && <Navbar></Navbar>
            }
            
            <Outlet></Outlet>
            {
                !showNav && <Footer></Footer>
            }
            
        </div>
    );
};

export default MainLayout;