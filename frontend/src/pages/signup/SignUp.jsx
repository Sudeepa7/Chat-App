import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderCheckBox from './genderCheckBox';
import useSignUp from '../../hooks/useSignUp';
import toast, { Toaster } from 'react-hot-toast'; // Import Toaster

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const { loading, signup } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs); // Call the signup function from the hook
  };

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <Toaster /> {/* Add the Toaster component here */}
      <div className='h-full w-full bg-brown-500 pt-5 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 p-3'>
          SignUp
          <span className='text-yellow-600'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className='space-y-4 p-6 max-w-md mx-auto'>
            <label className='input input-bordered flex items-center gap-2 bg-yellow-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='h-4 w-4 opacity-70'
              >
                <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
              </svg>
              <input
                type='text'
                className='grow'
                placeholder='Full Name'
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              />
            </label>

            <label className='input input-bordered flex items-center gap-2 bg-yellow-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='h-4 w-4 opacity-70'
              >
                <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
              </svg>
              <input
                type='text'
                className='grow'
                placeholder='User Name'
                value={inputs.userName}
                onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
              />
            </label>

            <label className='input input-bordered flex items-center gap-2 w-full bg-yellow-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='h-4 w-4 opacity-70'
              >
                <path
                  fillRule='evenodd'
                  d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                  clipRule='evenodd'
                />
              </svg>
              <input
                type='password'
                className='grow'
                placeholder='Password'
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              />
            </label>

            <label className='input input-bordered flex items-center gap-2 w-full bg-yellow-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='h-4 w-4 opacity-70'
              >
                <path
                  fillRule='evenodd'
                  d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                  clipRule='evenodd'
                />
              </svg>
              <input
                type='password'
                className='grow'
                placeholder='Confirm Password'
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              />
            </label>

            <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

            <Link
              to='/login'
              className='font-thin mt-2 text-yellow-500 dark:text-yellow-650 hover:underline'
            >
              Already have an account
            </Link>
            <button
              type='submit'
              className='btn w-full gap-2 py-1 max-w-md mx-auto bg-yellow-600 border border-gray-100 hover:bg-yellow-700'
              disabled={loading}
            >
              {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;