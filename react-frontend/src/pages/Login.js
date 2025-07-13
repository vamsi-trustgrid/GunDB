// src/pages/Login.js
import React, { useState } from "react";
import { user } from '../gunAuth1';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    user.auth(username, password, ack => {
      if (ack.err) {
        alert(ack.err);
      } else {
        alert("Login Successful");
        navigate('/dashboard');
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="bg-white p-6 rounded-md shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <label className="block mb-1">Username:</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />

        <label className="block mb-1">Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />

        <div className="flex justify-between">
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-gray-300 text-black px-3 py-1 rounded"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
