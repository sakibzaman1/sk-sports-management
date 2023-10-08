import { useLoaderData } from "react-router-dom";
import Header from "./Header/Header";
import Service from "./Service";
import Gallery from "./Gallery";
import Stats from "./Stats";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const Home = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const services = useLoaderData();


    return (
        <div className="font-openSans">
            <Header></Header>
            <h2 className="text-5xl text-center mb-10 font-semibold mt-20">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6 lg:gap-16 p-10 space-y-10 lg:space-y-0" data-aos="fade-up">

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }


            </div>
            <div data-aos="fade-right">
                <h1 className="text-5xl text-center mb-20 font-semibold mt-20">Gallery</h1>
                <Gallery></Gallery>
            </div>
            <div className="" data-aos="fade-up">
                <h1 className="text-5xl text-center mb-20 font-semibold mt-20">Stats</h1>
                <Stats></Stats>
            </div>
        </div>
    );
};

export default Home;