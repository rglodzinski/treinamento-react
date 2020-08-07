import React from "react";

import { AuthProvider } from "./useAuth";
import UserProfile from "./UserProfile";
import Footer from "../../Layout/Footer";

const CustomHooks = () => {
    return (
        <AuthProvider>
            <UserProfile />
            <Footer />
        </AuthProvider>
    );
};

export default CustomHooks;
