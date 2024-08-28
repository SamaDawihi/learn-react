import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {user: {email, password}};
    axios.post('http://localhost:3001/login', user)
    .then(response => {
      const token = response.data.token;
      if (token) {
        Cookies.set("token", `Bearer ${token}`);
        console.log('Authorization token:', token);
      }
      console.log('Authorization token:', token);
      navigate("/");
      window.location.reload();
    })
    .catch(error => {
      if (error.response) {
        setMessage(error.response.data.message || 'An error occurred during login.');
      } else if (error.request) {
        setMessage('No response received from the server.');
      } else {
        setMessage('An error occurred: ' + error.message);
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-1 text-gray-700 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-1 text-gray-700 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
              required
            />
          </div>
          <p className='text-red-500'>{message}</p>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-black rounded-lg hover:font-bold  focus:ring-4 focus:ring-indigo-300"
          >
            Sign In
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account? <a href="/register" className="text-black font-bold hover:underline">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
