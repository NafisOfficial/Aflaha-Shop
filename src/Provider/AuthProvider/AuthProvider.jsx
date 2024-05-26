import { createContext, useState } from "react";


export const authContext = createContext(null);



const AuthProvider = ( {children} ) => {
    
    const [user,setUser] = useState(true)


    const authinfo = {
        user,
        setUser,

    }

    return (
        <authContext.Provider value={authinfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;