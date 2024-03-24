import { IoCartOutline } from "react-icons/io5";
import { FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className="flex">
            {/* sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 text-white">
                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>

                    <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>

                    <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>

                    <li>
                        <NavLink to="/dashboard/cart"> <IoCartOutline /> My Cart ({cart.length})</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
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