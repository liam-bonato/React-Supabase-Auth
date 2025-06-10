import { createContext, useEffect, useState, useContext } from 'react';
import { supabase } from '../supabaseClient';


const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined)

    // Sign up
    const signUpNewUser = async () => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if (error){
            console.log("There was an error signing up: ", error)
            return { success: false, error}
        }
        return { success: true, data }
    };

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })
    }, [])

    return(
        <AuthContext.Provider value={{ session, signUpNewUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}