import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useState } from "react";
import { BiLowVision, BiShowAlt } from "react-icons/bi";




const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (

        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ZmRpYWy/sandro-schuh-Hgw-Y-YQ1m0w-unsplash.jpg)' }}>

                <div className="hero-overlay bg-opacity-20"></div>

                <div className="flex flex-col w-full">

                    <div className="flex items-center justify-center">
                        <Navbar></Navbar>
                    </div>

                    <form className="mx-auto  w-[95%] lg:w-3/5 bg-white p-8 lg:p-20 mt-20 space-y-6 mb-40 lg:rounded-none rounded-3xl">
                        <h2 className="text-center text-3xl font-semibold mb-10">Please Sign Up</h2> <hr className="mb-6" />

                        <div className="form-control">
                            <label className="label mb-4">
                                <span className="label-text  font-semibold text-xl">Your Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Your Name" className="input bg-[#F3F3F3] rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label mb-4">
                                <span className="label-text  font-semibold text-xl">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="Photo URL" className="input bg-[#F3F3F3] rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label mb-4">
                                <span className="label-text  font-semibold text-xl">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input bg-[#F3F3F3] rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label mb-4">
                                <span className="label-text  font-semibold text-xl">Password</span>
                            </label>
                            <div className="flex items-center relative">
                                <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input rounded-none w-full bg-[#F3F3F3]" required />
                                <div className="absolute right-4">
                                    {
                                        !showPassword ? <BiLowVision className="cursor-pointer" size="20px" onClick={() => setShowPassword(!showPassword)}></BiLowVision> : <BiShowAlt className="cursor-pointer" size="20px" onClick={() => setShowPassword(!showPassword)}></BiShowAlt>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="py-6">
                            <input type="checkbox" name="terms" id="" /> <span className="text-green-500 pl-3">Please Accept Our Terms & Conditions</span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="w-full bg-[#403F3F] text-white h-14 hover:scale-110 transition-transform">Submit</button>
                        </div>
                        <div className="text-center pt-10">
                            <small className="font-medium">Already Have an Account? Please <Link to="/login" className="text-blue-500 ml-2">Login</Link></small>
                        </div>
                    </form>

                </div>

            </div>
        </div>

    );
};

export default SignUp;