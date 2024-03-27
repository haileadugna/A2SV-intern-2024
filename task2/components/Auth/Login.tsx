"use client"
import { useLoginMutation } from '@/redux/slice/auth';
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, error }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      // handle successful login here
    } catch (err) {
      // handle error here
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="p-12 bg-white rounded shadow-xl w-96">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Password</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full p-2 bg-blue-600 text-white font-bold rounded" type="submit">
            Login
          </button>
        </form>
        {error && <p>Error: {error.message}</p>}
      </div>
    </div>
  );
}

export default Login;