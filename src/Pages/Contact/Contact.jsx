
import AltNavbar from "../Shared/AlternativeNavbar/AltNavbar";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
    return (
        <div className="bg-base-200 min-h-screen pb-20">

            <div className="flex justify-center items-center">
                <AltNavbar></AltNavbar>
            </div> <hr className="mt-10" />

            <div className="">
                <h1 className="text-center text-7xl my-20">
                    Contact Us via Email or WhatsApp
                </h1>
                <div className="flex justify-center mx-auto gap-20">
                    <AiOutlineMail size={60}></AiOutlineMail>
                    <BsWhatsapp size={60}></BsWhatsapp>
                </div>
            </div>





        </div>
    );
};

export default Contact;