import { useLoaderData } from "react-router-dom";

import Service from "../Home/Service";
import AltNavbar from "../Shared/AlternativeNavbar/AltNavbar";


const Services = () => {

    const services = useLoaderData();

    return (
        <div className="bg-base-200">
            <div className="flex justify-center items-center">
            <AltNavbar></AltNavbar>
            </div> <hr className="mt-10" />
            <div  data-aos="fade-down" data-aos-delay="200"><h2 className="text-5xl text-center mb-10 font-semibold mt-20">Our Services</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6 lg:gap-16 p-10 space-y-10 lg:space-y-0">

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }


            </div>
        </div>
    );
};

export default Services;