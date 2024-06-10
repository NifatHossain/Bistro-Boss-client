import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading,setLoading]=useState(true)


    const signUp=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);

    }
    const updateUserInfo=(userName,image)=>{
        return updateProfile(auth.currentUser, {
            displayName: userName, photoURL: image
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser)
                console.log(currentUser);
            }
            else{
                setUser(null)
            }
            setLoading(false)

        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    const userInfo={
        user,loading,signUp,signIn,logOut,updateUserInfo
    }
    
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;