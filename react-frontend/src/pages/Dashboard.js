// src/pages/Dashboard.js
import React from 'react';
import { user } from '../gunAuth1';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    user.leave();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Welcome, {user.is?.alias}!
        </h2>

        <p className="text-gray-700 mb-2">
           You've successfully logged into your decentralized app powered by GunDB.
        </p>

        <p className="text-gray-700 mb-2">
           Your account is stored securely and encrypted using GUN's SEA (Security, Encryption, Authorization).
        </p>

        <p className="text-gray-700 mb-4">
           This dashboard can be extended to show user profiles, notes, chat messages, or IoT data — all synced in real time.
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
