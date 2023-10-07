import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BiLowVision, BiShowAlt } from "react-icons/bi";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SweetAlert2 from "react-sweetalert2";
import Swal from "sweetalert2"; 




const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');


    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handeLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

        setLoginError('');

        signInUser(email, password)
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Successfully Logged In',
                    showConfirmButton: false,
                    timer: 2500
                  })
                // navigate user
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                setLoginError("Invalid User. Please Check Email or Password Again")
            })
    }


    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ZmRpYWy/sandro-schuh-Hgw-Y-YQ1m0w-unsplash.jpg)' }}>

                <div className="hero-overlay bg-opacity-20"></div>

                <div className="flex flex-col w-full">

                    <div className="flex items-center justify-center">
                        <Navbar></Navbar>
                    </div>

                    <form onSubmit={handeLogin} className="mx-auto w-[95%] lg:w-3/5 bg-white p-8 lg:p-20 mt-20 space-y-6 mb-40 lg:rounded-none rounded-3xl">
                        <h2 className="text-center text-3xl font-semibold mb-10">Please Login</h2> <hr className="mb-6" />

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

                        <div className="mx-auto mb-4 pt-4  w-full px-10 text-center">
                            {
                                loginError && <p className="text-red-600 italic">{loginError}</p>
                            }
                        </div>

                        <div className="form-control mt-6 pt-10 pb-10">
                            <button className="w-full bg-[#403F3F] text-white h-14 hover:scale-110 transition-transform">Login</button>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-between mb-10 space-y-6 lg:space-y-0">
                            <button className="btn btn-outline rounded-none bg-transparent hover:rounded-none capitalize lg:border-l-0 lg:border-b-0">
                                <FcGoogle></FcGoogle>
                                Login with Google
                            </button>
                            <button className="btn btn-outline rounded-none bg-transparent hover:rounded-none capitalize lg:border-t-0 lg:border-l-0">
                                <FaFacebook color="blue"></FaFacebook>
                                Login with Facebook
                            </button>
                            <button className="btn btn-outline rounded-none bg-transparent hover:rounded-none capitalize lg:border-b-0 lg:border-l-0">
                                <BsGithub></BsGithub>
                                Login with Github
                            </button>
                        </div>

                        <div className="text-center pt-10">
                            <small className="font-medium">New to this Website? Please <Link to="/signup" className="text-green-500 ml-2">Sign Up</Link></small>
                        </div>
                    </form>

                </div>

            </div>

            <SweetAlert2 />

        </div>
    );
};

export default Login;