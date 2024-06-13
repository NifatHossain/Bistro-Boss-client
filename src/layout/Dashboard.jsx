import {  FaHome } from "react-icons/fa";
import { FaCalendar, FaCartPlus, FaComment, FaHouse, FaWallet } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-60 min-h-screen bg-orange-400">
                <ul className="menu gap-4">
                    <li><NavLink to={'/dashboard/cart'}><FaCartPlus></FaCartPlus> My Cart</NavLink></li>
                    <li><NavLink to={'/dashboard/reservaion'}><FaCalendar></FaCalendar> Reservation</NavLink></li>
                    <li><NavLink to={'/dashboard/payment'}><FaWallet></FaWallet> My Payments</NavLink></li>
                    <li><NavLink to={'/dashboard/review'}><FaComment></FaComment> My review</NavLink></li>
                    <li><NavLink to={'/dashboard/booking'}><FaHouse></FaHouse> My Bookings</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to={'/'}><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to={'/menu'}><MdRestaurantMenu /> Menu </NavLink></li>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;