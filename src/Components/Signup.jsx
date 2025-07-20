/* // src/components/Auth.jsx
import React, { useState } from 'react'
import { supabase } from '../auth/supabaseClient'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) alert('Signup Error: ' + error.message)
    else alert('Check your email to confirm signup')
  }

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert('Login Error: ' + error.message)
    else alert('Login successful!')
  }

  return (
    <div>
      <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={signUp}>Sign Up</button>
      <button onClick={login}>Login</button>
    </div>
  )
}


 */
/* 


import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [name , setName] = useState("")
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState("");

  const { signup } = useAuth();
  const nav = useNavigate();
 
  

  async function handleSubmit() {
    if (!email || !password) {
      return alert("Please fill all fields");
    }

    setLoading(true);
    try {
      await signup(email, password);
      localStorage.setItem('username',name)
      nav("/dashboard");
    } catch (e) {
      console.log(e);
      setError("Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-xl relative">
        <button
          onClick={() => nav('/')}
          className="absolute top-1 right-4 text-gray-500 hover:text-red-500 text-4xl cursor-pointer"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

        {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
    
         <input
          type="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          placeholder="name"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />


        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 disabled:opacity-50"
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>

         <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{''}
            <Link 
              to="/login" 
              className="text-red-500 hover:text-red-600 font-medium"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup; */


import React, { useState } from 'react';
import { supabase } from '../auth/supabaseClient'; // Make sure this is correctly configured
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email || !password || !name) {
      return alert("Please fill all fields");
    }

    setLoading(true);
    setError("");

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name }, // store name in user_metadata
        }
      });

      if (error) {
        setError("Signup failed: " + error.message);
      } else {
        localStorage.setItem("username", name);
        alert("Check your email to confirm signup");
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-xl relative">
        <button
          onClick={() => navigate('/')}
          className="absolute top-1 right-4 text-gray-500 hover:text-red-500 text-4xl cursor-pointer"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

        {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}

        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 disabled:opacity-50"
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-red-500 hover:text-red-600 font-medium"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
