
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
    const axiosPublic= useAxiosPublic()
    const location=useLocation()
    const navigate= useNavigate()
    const{googleSignIn}=useContext(AuthContext)
    const handleGoogleLogin=()=>{
        googleSignIn()
        .then((result)=>{
            console.log(result.user)
            const email= result?.user?.email;
            const name= result?.user?.displayName;
            const userInfo= {name,email}
            axiosPublic.post('/adduser',userInfo)
            .then(result=>{
                console.log(result.data)
                navigate(location.state? location.state :'/')
            })
        })
        .cath(error=>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn btn-block my-3 bg-green-400 border-2"><FaGoogle></FaGoogle> Login with Google</button> 
        </div>
    );
};

export default GoogleSignIn;