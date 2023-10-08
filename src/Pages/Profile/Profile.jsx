import { useContext } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";


const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="font-openSans">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ZmRpYWy/sandro-schuh-Hgw-Y-YQ1m0w-unsplash.jpg)' }}>

                <div className="hero-overlay bg-opacity-20"></div>

                <div className="flex flex-col w-full">

                    <div className="flex items-center justify-center">
                        <Navbar></Navbar>
                    </div>

                    <div>
                        <div className="hero min-h-screen">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <div className="card w-96">
                                    <figure className="px-10 pt-10">
                                        <img src={user.photoURL} alt="Shoes" className="rounded-full" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-4xl text-stone-800 ">{user.displayName}</h2>
                                        <p className="italic">{user.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-5xl font-bold text-black">SK Sports Event Management</h1>
                                    <p className="py-6 text-stone-800 font-semibold">Welcome On Board</p>
                                    <div className="flex gap-4 items-center">
                                        <Link to="/"><button className="rounded-sm w-40 h-full hover:scale-110  bg-gradient-to-r from-gray-600 to-gray-950 hover:bg-[#403F3F] text-white font-semibold hover:text-white py-2  border-2 border-none hover:border-transparent  transition duration-300 ease-in-out">Go Back to Home</button></Link> <TiArrowBackOutline size={40}></TiArrowBackOutline>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default Profile;