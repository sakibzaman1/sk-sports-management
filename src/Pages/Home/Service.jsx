/* eslint-disable react/prop-types */
import { IoArrowUndoOutline } from "react-icons/io5";
import './service.css'
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Service = ({service}) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    const { id, title, price, description, image } = service;

    return (
        <div data-aos="fade-down" data-aos-delay="300">
            <div className="card shadow-xl image-full h-80 hover:scale-110 transition-transform cursor-pointer font-openSans" >
                    <figure className="rounded-none"><img className="" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="h-10 mb-8">
                        <h2 className="card-title text-2xl mb-6 text-white font-semibold">{title}</h2>
                        </div>
                        <div className="h-20 mb-4">
                        {
                            description.length > 100 ? <p>{description.slice(0,100)}....</p> : <p>{description}</p>
                        }
                        </div>
                        <div className="h-10">
                        <p className="text-3xl ">$ {price}</p>
                        </div>
                        <div className="card-actions justify-end items-center ">
                            <Link to={`/servicedetails/${id}`}><button className="bg-gradient-to-r from-gray-600 to-gray-950 text-white rounded-none w-32 h-10 hover:scale-110 transition-transform">View Details</button></Link>
                            <IoArrowUndoOutline className=""></IoArrowUndoOutline>
                            
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Service;