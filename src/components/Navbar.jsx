import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {
    // const navOption= <>
    //     <ul className="p-2">
    //         <li><a>Submenu 1</a></li>
    //         <li><a>Submenu 2</a></li>
    //     </ul>
    // </>
    const {logOut,user}=useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
            .then(()=>{
                alert('logout successfull')
            })
            .catch((error)=>{
                console.log(error.message)
            })
    }
    return (
        <div>
            <div className="navbar fixed z-10 opacity-75 bg-black text-white max-w-7xl">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/menu'}>Menu</Link></li>
                        <li><Link to={'/order'}>Order</Link></li>
                        {/* <li>{user?.displayName}</li> */}
                        <li><button className="btn p-0">
                                Cart
                                <div className="badge badge-secondary">+99</div>
                            </button>
                        </li>
                        
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/menu'}>Menu</Link></li>
                    <li><Link to={'/order'}>Order</Link></li>
                    {/* <li>{user?.displayName}</li> */}
                    <li><button className="btn p-0">
                            Cart
                            <div className="badge badge-secondary">+99</div>
                        </button>
                    </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <><button onClick={handleLogOut} className="btn">log out</button></>:<><Link to={'/login'}><button className="btn">Login</button></Link></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;