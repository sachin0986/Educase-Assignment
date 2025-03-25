import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Welcome to PopX</h1>
      <p className="text-gray-600 mb-8 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div className="w-full max-w-xs space-y-4">
        <button 
          onClick={() => navigate('/create-account')}
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Create Account
        </button>
        <button 
          onClick={() => navigate('/sign-in')}
          className="w-full bg-purple-100 text-purple-600 py-3 rounded-lg hover:bg-purple-200 transition"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;