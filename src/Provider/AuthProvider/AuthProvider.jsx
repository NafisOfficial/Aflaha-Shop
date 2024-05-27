import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../Firebase/firebase.config";


export const authContext = createContext(null);
const auth = getAuth(app);



const AuthProvider = ( {children} ) => {
    
    const [user,setUser] = useState(false)


    const signinWithEmailPassword = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logInWithEmailPassword = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signinWithGoogle = (provider) =>{
        return signInWithPopup(auth,provider)
    }

    const logOut = ()=>{
        return signOut(auth);
    }

 
    const authInfo = {
        user,
        setUser,
        logInWithEmailPassword,
        signinWithEmailPassword,
        signinWithGoogle,
        logOut

    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;