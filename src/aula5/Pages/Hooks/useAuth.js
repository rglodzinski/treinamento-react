import React, { useState, useContext, createContext } from "react";
import * as AuthAPI from "../../api/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext);
};

const useProvideAuth = () => {
    const [user, setUser] = useState(null);

    const isLoggedIn = (user && user !== false);

    const signin = (email, password) => {
        return AuthAPI.signInWithEmailAndPassword(email, password)
            .then(user => {
                setUser(user);
                return user;
            });
    };

    const signout = () => AuthAPI.signOut().then(() => setUser(false));

    return {
        user,
        isLoggedIn,
        signin,
        signout
    };
}