import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'
import useAxiosPublic from "../hooks/useAxiosPublic";
import GoogleSignIn from "../components/GoogleSignIn";

const Register = () => {
    const axiosPublic= useAxiosPublic();
    const captchaRef= useRef(null)
    const [disabled,setDisabled]=useState(true)
    const navigate= useNavigate();
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])
    const handleCaptchValidation=(e)=>{
        e.preventDefault();
        const user_captcha_value= captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false)

        }
   
        else {
            setDisabled(true)
        }
    }
    const {signUp,updateUserInfo}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
        const form= e.target;
        const name= form.name.value;
        const image= form.image.value;
        const email= form.email.value;
        const password=form.password.value
        const userInfo={name,email}
        signUp(email,password)
            .then(result=>{
                const user= result.user;
                console.log(user)
                updateUserInfo(name,image)
                .then(()=>{
                    axiosPublic.post('/adduser',userInfo)
                    .then((result)=>{
                         if(result.data.insertedId){
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Successfully Updated user Info",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                         }
                    })
                    
                })
                .catch((error)=>{
                    console.log(error)
                })
            })
            .catch(error=>{
                console.log(error.message)
            })
    }
    return (
        <div className="bg-slate-100">
            <Helmet>
                <title>Registration Page</title>
            </Helmet>
        <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-semibold text-4xl text-blue-500 py-4">Registration</h2>
           <div className="rounded-xl grid grid-cols-2 gap-4 items-center justify-center  bg-white p-10">
            <div>
            {/* onSubmit={handleSubmit} */}
                <form onSubmit={handleRegister}  className="flex flex-col gap-3">
                    <img src="https://i.ibb.co/GCcBVt2/Screenshot-2024-05-13-102902.png" className="w-1/2" alt="" />
                    <input type="text" name="name" placeholder="Your Name" className="p-4 border-2 rounded-lg" />
                    <input type="email" name="email" placeholder="Email Address" className="p-4 border-2 rounded-lg" />
                    <input type="password" name="password" placeholder="Enter Password" className="p-4 border-2 rounded-lg" />
                    <input type="text" name="image" placeholder="Image URL" className="p-4 border-2 rounded-lg"/>
                    <div>
                        <LoadCanvasTemplate />
                    </div>
                    <input type="text" name="captcha" ref={captchaRef} placeholder="Enter Captcha" className="p-4 border-2 rounded-lg" />
                    <button className="btn" onClick={handleCaptchValidation}>validate captcha</button>
                    <input type="submit"  disabled={disabled} value={'Register'} className="p-4 btn cursor-pointer text-xl font-semibold bg-blue-500 text-white border-2 rounded-lg"/>
                </form>
                <p className="mt-4">Already have an account? <Link to={'/login'} className="text-blue-700">SignIn</Link> </p>
                <GoogleSignIn></GoogleSignIn>
            </div>
            <div className="hidden md:block">
                <img src="https://i.ibb.co/8BpLZ81/registration.jpg" alt="" />
            </div>
           </div>
        </div>
        </div>
    );
};

export default Register;