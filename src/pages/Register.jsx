import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Register = () => {
    const captchaRef= useRef(null)
    const [disabled,setDisabled]=useState(true)
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
                <form  className="flex flex-col gap-3">
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
                    <input type="submit" disabled={disabled} value={'Register'} className="p-4 btn cursor-pointer text-xl font-semibold bg-blue-500 text-white border-2 rounded-lg"/>
                </form>
                <p className="mt-4">Already have an account? <Link to={'/signin'} className="text-blue-700">SignIn</Link> </p>
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