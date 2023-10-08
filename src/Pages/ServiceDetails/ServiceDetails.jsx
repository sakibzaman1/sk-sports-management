import { Link, useLoaderData, useParams } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import defaultUserLogo from '../../assets/user.png'
import SweetAlert2 from "react-sweetalert2";
import Swal from "sweetalert2"; 
import { TiArrowBackOutline } from "react-icons/ti";


const ServiceDetails = () => {

    const {user, signOutUser} = useContext(AuthContext);
    const services = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    console.log(idInt)

    const thatService = services.find(thatService => thatService.id === idInt);
    const { title, description, price, image } = thatService;

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
        <div>

            <div className="text-black bg-base-200 px-6 py-6">
            <div className="w-full flex justify-between items-center">
                    <div>
                    <a className="normal-case text-2xl font-bold flex">SK Sports</a>
                    </div>
                    <div className="hidden lg:flex">
                        <h1 className="font-bold text-3xl">
                        {
                            user? user.displayName : ''
                        }
                        </h1>
                    </div>
                    <div className="flex justify-end items-center">
                        <div className="avatar">
                            <div className="w-8 rounded-full">
                                <img src={

                                    user ? user.photoURL :

                                        defaultUserLogo} />
                            </div>
                        </div>
                        <div>
                            {
                                user ?

                                    <Link><button onClick={handleSignOut} className=" rounded-sm w-20 hover:scale-110  bg-transparent  text-black font-semibold hover:text-black py-2  border-none border-[#403F3F] hover:border-transparent  transition duration-300 ease-in-out">Logout</button></Link> :

                                    <Link to="/login"><button className=" rounded-sm w-20 hover:scale-110  bg-transparent  text-black font-semibold hover:text-black py-2  border-none border-[#403F3F] hover:border-transparent  transition duration-300 ease-in-out">Login</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="hero min-h-screen bg-base-200">


                <div className="hero-content flex-col lg:flex-row-reverse lg:p-6">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="lg:space-y-0 space-y-6">
                        <h1 className="text-5xl font-bold">{title}</h1> 
                        <p className="py-6">{description} <span className="text-red-600 font-mono font-semibold"><small className="italic">  ${price}</small></span></p> 
                        
                        <div className="flex gap-4 items-center">
                        <Link to="/"><button className="rounded-sm w-40 h-full hover:scale-110  bg-gradient-to-r from-gray-600 to-gray-950 hover:bg-[#403F3F] text-white font-semibold hover:text-white py-2  border-2 border-none hover:border-transparent  transition duration-300 ease-in-out">Go Back to Home</button></Link> <TiArrowBackOutline size={40}></TiArrowBackOutline>
                        </div>
                    </div>
                </div>
            </div>
            <SweetAlert2></SweetAlert2>
        </div>
    );
};

export default ServiceDetails;