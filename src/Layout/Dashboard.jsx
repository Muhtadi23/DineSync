// import { IoCartOutline } from "react-icons/io5";
import {  FaHome,  FaEnvelope, FaUtensils, FaList, FaBook, FaUsers, FaCalendar, FaShoppingCart, FaAd } from 'react-icons/fa';
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart()
    // todo: get isAdmin valur from database 
    const isAdmin = true;

    return (
        <div className="flex">
            {/* sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 text-white">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar></FaCalendar>
                                        Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaList></FaList>
                                        My Bookings</NavLink>
                                </li>
                            </>
                    }
                    {/* shared navlinks */}
                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>

                    <li><NavLink to="/menu"> Our Menu</NavLink></li>

                    <li><NavLink to="/order/salad">Order Food</NavLink></li>

                    <li><NavLink to="/order/salad"> <FaEnvelope></FaEnvelope> Contact</NavLink></li>
                </ul>
            </div>
            {/* dash content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;