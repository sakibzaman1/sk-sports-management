import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";

const ErrorPage = () => {
    return (
        <div className="flex mx-auto items-center min-h-screen justify-around w-full ">
            <img className="w-2/6" src="https://i.ibb.co/BCB6Kk1/error404.png" alt="" />
            <div className="flex gap-4 items-center">
                <Link to="/"><button className="rounded-sm w-40 h-full hover:scale-110  bg-gradient-to-r from-orange-600 to-yellow-500 hover:bg-[#403F3F] text-white font-semibold hover:text-white py-2  border-2 border-none hover:border-transparent  transition duration-300 ease-in-out">Go Back to Home</button></Link> <TiArrowBackOutline size={40}></TiArrowBackOutline>
            </div>
        </div>
    );
};

export default ErrorPage;