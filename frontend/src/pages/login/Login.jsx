import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/uselogin';

const Login = () => {
  const [userName, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 

  const {loading,login} = useLogin();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(userName,password);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full w-full bg-brown-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 p-3'>
          Login
          <span className='text-yellow-600'> ChtatApp</span>
        </h1>

<form onSubmit={handleSubmit}>

        <div className='space-y-4 p-6 max-w-md mx-auto'>
          <label className="input input-bordered flex items-center gap-2  w-full bg-yellow-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input 
            type="text" 
            className="grow" 
            placeholder="Username" 
            value={userName}
            onChange={(e) => setUsername(e.target.value)}/>
          </label>

          <label className="input input-bordered flex items-center gap-2 w-full bg-yellow-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd" />
            </svg>
            <input type="password" className="grow" placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <Link to='/signup' className="font-thin mt-10 text-yellow-500 dark:text-yellow-650 hover:underline">Don't have a account</Link>
          <button className="btn w-full gap-2 py-1 max-w-md mx-auto bg-yellow-600 border border-gray-100 hover:bg-yellow-700"
          disabled={loading} // Add this
          >
            {loading ? <span className='loading loading-spinner'></span> : "Login"}
            </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login

//Starter code for this file
// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='h-full w-full bg-brown-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300 p-3'>
//           Login
//           <span className='text-yellow-600'> ChtatApp</span>
//         </h1>


//         <div className='space-y-4 p-6 max-w-md mx-auto'>
//           <label className="input input-bordered flex items-center gap-2 bg-yellow-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="h-4 w-4 opacity-70">
//               <path
//                 d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//               <path
//                 d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//             </svg>
//             <input type="text" className="grow" placeholder="Email" />
//           </label>
//           <label className="input input-bordered flex items-center gap-2  w-full bg-yellow-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="h-4 w-4 opacity-70">
//               <path
//                 d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//             </svg>
//             <input type="text" className="grow" placeholder="Username" />
//           </label>
//           <label className="input input-bordered flex items-center gap-2 w-full bg-yellow-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="h-4 w-4 opacity-70">
//               <path
//                 fillRule="evenodd"
//                 d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                 clipRule="evenodd" />
//             </svg>
//             <input type="password" className="grow" placeholder="Password" />
//           </label>

//           <a href="#" className="font-thin mt-10 text-yellow-500 dark:text-yellow-650 hover:underline">Don't have a account</a>
//           <button className="btn w-full gap-2 py-1 max-w-md mx-auto ">Responsive</button>

//         </div>

//       </div>
//     </div>
//   )
// }

// export default Login

