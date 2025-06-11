import { createContext, useEffect, useState, useContext } from 'react';
import { supabase } from '../supabaseClient';


const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined)

    // Sign up
    const signUpNewUser = async ({ email, password }) => {
        const { data, error } = await supabase.auth.signUp({
            email: email.toLowerCase(),
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

        supabase.auth.onAuthStateChange((_event , session) => {
            setSession(session)
        })
    }, []);

    // Sign out
    const signOutUser = () => {
        const { error } = supabase.auth.signOut();
        if (error) {
            console.log("There was an error signing out: ", error)
        }
    }

    // Sign in
    const signInUser = async ({ email, password }) => {
        try{
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) {
                console.log("There was an error signing in: ", error)
                return { success: false, error }
            }
            console.log("User signed in successfully: ", data)
            return { success: true, data }
        } catch (error) {
            console.log("There was an error signing in: ", error)
        }
    }

    return(
        <AuthContext.Provider value={{ session, signUpNewUser, signOutUser, signInUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}