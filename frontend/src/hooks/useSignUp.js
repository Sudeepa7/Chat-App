import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
  
    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
      const success = handleInputErrors({ fullName, userName, password, confirmPassword, gender });
      if (!success) return;
  
      setLoading(true);
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName, userName, password, confirmPassword, gender }),
        });
  
        const data = await res.json();
        if (data.error) { // Added: Check for non-OK responses
          throw new Error(data.error); // Added: Throw error with response message
        }

        //local storage
        localStorage.setItem("chat-user",JSON.stringify(data))
        //context
        setAuthUser(data);

        //console.log(data);
      toast.success('Signup successful!'); // Added: Success toast message
    } catch (error) {
      toast.error(error.message || 'An error occurred during signup'); // Improved: Fallback error message
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignUp;

function handleInputErrors({ fullName, userName, password, confirmPassword, gender }) {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
      toast.error('Please fill in all fields');
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match"); // Fixed: Typo in error message ("Do not" → "do not")
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters"); // Fixed: Typo in error message ("charactors" → "characters")
      return false;
    }
    return true;
  }