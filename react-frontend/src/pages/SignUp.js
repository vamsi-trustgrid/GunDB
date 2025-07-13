import React, { useState } from 'react';
import { user } from '../gunAuth1';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    user.create(username, password, ack => {
      if (ack.err) {
        alert(`${ack.err}. Please try to login.`);
        setUsername('');
        setPassword('');
      } else {
        alert('Signup successful!');
        setUsername('');
        setPassword('');
        navigate('/login');
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="bg-white p-6 rounded-md shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Signup</h2>

        <label className="block mb-1">Username:</label>
        <input
          className="w-full border border-gray-300 p-2 rounded mb-4"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <label className="block mb-1">Password:</label>
        <input
          type="password"
          className="w-full border border-gray-300 p-2 rounded mb-4"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <div className="flex justify-between">
          <button
            onClick={handleSignup}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Signup
          </button>
          <button
            onClick={() => navigate('/login')}
            className="bg-gray-300 text-black px-3 py-1 rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
