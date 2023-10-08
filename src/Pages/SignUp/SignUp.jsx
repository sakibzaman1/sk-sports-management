import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext, useState } from "react";
import { BiLowVision, BiShowAlt } from "react-icons/bi";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2"; 
import SweetAlert2 from "react-sweetalert2";





const SignUp = () => {

    const { createUser, updateUser } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [registerError, setRegisterError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState('');

    const navigate = useNavigate();

    // set button disabled

    const handleButtonDisable = (e) => {
        const termsAccepted = e.target.checked;
        console.log(termsAccepted);
        // button disabled

        if (termsAccepted) {
            setIsDisabled(false)
        }
        else {
            setIsDisabled(true)
        }
    }

    // create user

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo')
        const email = form.get('email');
        const password = form.get('password');

        setRegisterError('')
        setRegistrationSuccess('')

        if (password.length < 6) {
            setRegisterError("Password should be at least 6 character long")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("Your Password should  have at least one uppercase character")
            return;
        }
        else if(!/[^A-Za-z0-9]/.test(password)) {
            setRegisterError("Your Password must have one spceial character")
            return;
        }

        // create User

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();

                updateUser(name, photo)
                    .then(()=>{
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Registration Successfull',
                            showConfirmButton: false,
                            timer: 2500
                          })
                        //   navigate user
                        setTimeout(()=> {
                            navigate('/')
                        },2000)
                    })
                    .catch()
                    

            })
            .catch(error => {
                console.log(error.message);
                setRegisterError(error.message)
            });

        // update user 



    }


    return (

        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ZmRpYWy/sandro-schuh-Hgw-Y-YQ1m0w-unsplash.jpg)' }}>

                <div className="hero-overlay bg-opacity-20"></div>

                <div className="flex flex-col w-full">

                    <div className="flex items-center justify-center">
                        <Navbar></Navbar>
                    </div>

                    <form onSubmit={handleSignUp} className="mx-auto  w-[95%] lg:w-3/5 bg-white p-8 lg:p-20 mt-20 space-y-6 mb-40 lg:rounded-none rounded-3xl border-transparent">
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
                            <input onChange={handleButtonDisable} type="checkbox" name="terms" id="" /> <span className="text-green-500 pl-3">Please Accept Our Terms & Conditions</span>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={isDisabled} className={`w-full  font-semibold text-white h-14  ${isDisabled? "bg-gray-400" : "bg-gradient-to-r from-gray-600 to-gray-950 hover:scale-110 transition-transform"}`}>Submit</button>
                        </div>

                        <div className="mx-auto mb-10 w-full px-10 text-center">
                            {
                                registerError && <p className="text-red-600 italic">{registerError}</p>
                            }
                            {
                                registrationSuccess && <p className="text-green-600">{registrationSuccess}</p>
                            }
                        </div>

                        <div className="text-center pt-10">
                            <small className="font-medium">Already Have an Account? Please <Link to="/login" className="text-blue-500 ml-2">Login</Link></small>
                        </div>


                    </form>



                </div>



            </div>


        <SweetAlert2/>
        </div>

    );
};

export default SignUp;