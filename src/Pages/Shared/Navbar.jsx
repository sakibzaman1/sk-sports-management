import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import defaultUserLogo from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SweetAlert2 from "react-sweetalert2";
import Swal from "sweetalert2"; 
import { BiUserCheck, BiLogOutCircle, BiLogInCircle } from "react-icons/bi";


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    // Sign Out Button

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    title: '<strong>Logged Out</strong>',
                    icon: 'info',
                    html:
                      'How Was Your Experience?',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                      '<i class="fa fa-thumbs-up"></i> Great!',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                    cancelButtonText:
                      '<i class="fa fa-thumbs-down"></i> Not Good',
                    cancelButtonAriaLabel: 'Thumbs down'
                  })
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className="mt-6">
            <div className={`navbar font-openSans gap-56 ${user? 'lg:gap-24' : 'lg:gap-48'} text-white`}>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink>Home</NavLink></li>
                            <li>
                                <NavLink>Services</NavLink>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><NavLink to="/others">About</NavLink></li>
                            <li><NavLink to="/others">Contact</NavLink></li>
                        </ul>
                    </div>
                    <a className="normal-case text-2xl font-bold hidden lg:flex">SK Sports</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-16">
                        <li className="navLinks"><NavLink to="/">Home</NavLink></li>
                        <li className="" tabIndex={0}>
                            <details className="hover:cursor-pointer">
                                <summary className="">Services</summary>
                                <ul className="p-2 text-black w-[160px] rounded-none text-center">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li className="navLinks"><NavLink to="/others">About</NavLink></li>
                        <li className="navLinks"><NavLink to="/others">Contact</NavLink></li>
                        <li className="navLinks"><NavLink to="/others">{
                            user? <div className="flex items-center gap-2"><BiUserCheck size={20}></BiUserCheck>{user.displayName}</div> : ""
                        }</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end w-2/6 items-center">
                    <div className="flex  justify-between items-center">
                        <div className="avatar">
                            <div className="w-8 rounded-full  ring ring-offset-green-600 ring-offset-2">
                                <img src={

                                    user ? user.photoURL :

                                        defaultUserLogo} />
                            </div>
                        </div>
                        <div className="ml-2">
                            {
                                user ?

                                    <div className="flex items-center">
                                        <Link><button onClick={handleSignOut} className=" rounded-sm w-20 hover:scale-110  bg-transparent  text-white font-semibold hover:text-white py-2  border-none border-[#403F3F] hover:border-transparent  transition duration-300 ease-in-out">Logout</button></Link>
                                        <BiLogInCircle></BiLogInCircle>
                                    </div> :

                                    <div className="flex items-center"> 
                                        <Link to="/login"><button className=" rounded-sm w-20 hover:scale-110  bg-transparent  text-white font-semibold hover:text-white py-2  border-none border-[#403F3F] hover:border-transparent  transition duration-300 ease-in-out">Login</button></Link>
                                        <BiLogOutCircle></BiLogOutCircle>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <SweetAlert2></SweetAlert2>
        </div>
    );
};

export default Navbar;