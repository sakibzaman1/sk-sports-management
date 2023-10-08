import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import defaultUserLogo from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import { BiUserCheck, BiLogOutCircle, BiLogInCircle } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Navbar = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    const { user, signOutUser } = useContext(AuthContext);

    // Sign Out Button

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className="mt-6">
            <div className={`navbar font-openSans gap-56 ${user ? 'lg:gap-24' : 'lg:gap-48'} text-white`}>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink>Home</NavLink></li>
                            <li className="" tabIndex={0}>
                                <details className="hover:cursor-pointer">
                                    <summary className="text-black"><Link to="/services">Services</Link></summary>
                                    <ul className="p-2 text-black">
                                        <li><a>Event Planning</a></li>
                                        <li><a>Venue Selection</a></li>
                                        <li><a>Entertainment Booking</a></li>
                                        <li><a>Ticketing & Promotion</a></li>
                                        <li><a>Production Support</a></li>
                                        <li><a>Branding & Marketing</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li className="text-black"><NavLink to="/about">About</NavLink></li>
                            <li className="text-black"><NavLink to="/contact">Contact</NavLink></li>
                            <li className="navLinks"><NavLink to="/profile">{
                                user ? <div className="text-black">{user.displayName}</div> : "Profile"
                            }</NavLink></li>
                        </ul>
                    </div>
                    <a className="normal-case text-2xl font-bold hidden lg:flex">SK Sports</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-16">
                        <li className="navLinks"><NavLink to="/">Home</NavLink></li>
                        <li className="navLinks" tabIndex={0}>
                            <details className="hover:cursor-pointer">
                                <summary className=""><Link to="/services">Services</Link></summary>
                                <ul className="p-2 text-black w-[230px] rounded-none text-center">
                                    <li><a>Event Planning</a></li> <hr />
                                    <li><a>Venue Selection</a></li> <hr />
                                    <li><a>Entertainment Booking</a></li> <hr />
                                    <li><a>Ticketing & Promotion</a></li> <hr />
                                    <li><a>Production Support</a></li> <hr />
                                    <li><a>Branding & Marketing</a></li>
                                </ul>
                            </details>
                        </li>
                        <li className="navLinks"><NavLink to="/about">About</NavLink></li>
                        <li className="navLinks"><NavLink to="/contact">Contact</NavLink></li>
                        <li className="navLinks"><NavLink to="/profile">{
                            user ? <div className="flex items-center gap-2"><BiUserCheck size={20}></BiUserCheck>{user.displayName}</div> : <div className="flex items-center gap-2"><AiOutlineUserAdd></AiOutlineUserAdd><p>Profile</p></div>
                        }</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end w-2/6 items-center">
                    <div className="flex  justify-between items-center">
                        <div className="avatar" >
                            <div className="w-8 rounded-full  ring ring-offset-green-600 ring-offset-2" data-aos="fade-left" data-aos-delay="400">
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
                                        <div className="hidden lg:flex"><BiLogInCircle></BiLogInCircle></div>
                                    </div> :

                                    <div className="flex items-center">
                                        <Link to="/login"><button className=" rounded-sm w-20 hover:scale-110  bg-transparent  text-white font-semibold hover:text-white py-2  border-none border-[#403F3F] hover:border-transparent  transition duration-300 ease-in-out">Login</button></Link>
                                        <div className="hidden lg:flex"><BiLogOutCircle></BiLogOutCircle></div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;