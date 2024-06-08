import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/DY1w78j/login-bg.png')] bg-center bg-cover h-screen pt-10">
            <Helmet>
                <title>Login Page</title>
            </Helmet>
            <div className="flex flex-col gap-4 justify-center w-1/4 mx-auto border p-7 backdrop-blur-xl rounded-lg ">
                <h2 className="text-3xl  font-semibold text-blue-500 text-center">Login</h2>
                <div className="flex justify-center">
                    <img className="" src="https://i.ibb.co/GCcBVt2/Screenshot-2024-05-13-102902.png" alt="" />
                </div>
                <div>
                {/* onSubmit={handleLogIn} */}
                    <form  className="flex flex-col gap-3">
                        <input type="email" name="email" placeholder="Email Address" className="p-4  border-2 rounded-lg" />
                        <input type="password" name="password" placeholder="Enter Password" className="p-4  border-2 rounded-lg" />
                        <input type="submit" value={'Signin'} className="p-4 cursor-pointer text-xl font-semibold bg-blue-500 text-white rounded-lg"/>
                    </form>
                </div>
                <button  className="btn p-4 rounded-lg  font-medium"> <span className="text-xl"></span>Login with Google</button>
                <p className="mt-4">Don&apos;t have an account? <Link to={'/register'} className="text-white">Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;