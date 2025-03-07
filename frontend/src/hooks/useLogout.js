import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast'; // Import toast for error messages

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" } // Fixed header key
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            // Remove user from local storage
            localStorage.removeItem("chat-user");

            // Clear user from context
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message); // Display error message
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout }; // Return loading state and logout function
};

export default useLogout;