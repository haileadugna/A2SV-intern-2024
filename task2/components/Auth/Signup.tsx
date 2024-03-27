'use client'
import { useSignupMutation } from '@/redux/slice/auth';
import { useRouter } from "next/navigation";
import React, { useState } from 'react';


function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [signup, { isLoading, error }] = useSignupMutation();
  const router = useRouter();


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        // handle password mismatch
        return;
    }
    try {
      console.log("working")
        await signup({
          name, email, password,
          confirmPassword, role
        });
        console.log("why it is not working")
        router.push('/opportunities');
        // handle successful signup here
    } catch (err) {
        // handle error here
    }
};

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="p-12 bg-white rounded shadow-xl w-96">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Name</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Confirm Password</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
          <label className="block text-sm font-bold mb-2">Role</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="textds"
              name="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <button className="w-full p-2 bg-blue-600 text-white font-bold rounded" type="submit">
            Sign Up
          </button>
        </form>
        {error && <p>Error: {error.message}</p>}
      </div>
    </div>
  );
}

export default Signup;