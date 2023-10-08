import Navbar from "../../Shared/Navbar";
import Banner from "./Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const Header = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return (
        <div className="relative">
            <div className=" absolute top-0 left-0 w-full flex items-center justify-center ">
            <Navbar></Navbar>
            </div>
            <div className="w-full">
            <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;