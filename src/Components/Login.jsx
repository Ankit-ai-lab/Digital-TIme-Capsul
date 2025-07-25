import React, { useState } from 'react';
import { supabase } from '../auth/supabaseClient'; // ✅ 1. Import Supabase client
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('ag0666564@gmail.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate(); // ✅ 2. useNavigate for redirection

  async function handleSubmit() {
    if (!email || !password) return alert("Please fill all fields");

    setLoading(true);
    setError("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        setError("Login failed: " + error.message);
      } else {
        // ✅ 3. Optionally store name from metadata
        const userName = data.user?.user_metadata?.name || "";
        localStorage.setItem("username", userName);
        navigate('/mycapsul');
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-xl relative">
        <button
          onClick={() => navigate('/')}
          className="absolute top-1 right-4 text-gray-500 hover:text-red-500 text-4xl cursor-pointer"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

        {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don&apos;t have an account?{' '}
            <Link 
              to="/signup" 
              className="text-red-500 hover:text-red-600 font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
