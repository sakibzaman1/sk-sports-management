import { Link } from "react-router-dom";
import { IoArrowRedo } from "react-icons/io5";


const Banner = () => {
    return (
        <div className="hero min-h-screen font-openSans lg:w-full" style={{ backgroundImage: 'url(https://i.ibb.co/ZmRpYWy/sandro-schuh-Hgw-Y-YQ1m0w-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-10 text-3xl lg:text-7xl font-bold mt-20">SK Sports <span className="text-stone-800">Event</span> Management</h1>
                    
                    <div className="flex justify-center gap-4 items-center">
                    <IoArrowRedo size={40} color="black"></IoArrowRedo>
                    <Link to="/signup"><button className="rounded-sm w-28 h-full hover:scale-110  bg-gradient-to-r from-gray-600 to-gray-950 hover:bg-[#403F3F] text-white font-semibold hover:text-white py-2  border-2 border-none hover:border-transparent  transition duration-300 ease-in-out">Sign Up</button></Link> 

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;