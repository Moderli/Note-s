import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Implement sign-up logic here
    console.log('Signed up with:', email, password);
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center h-screen p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <input
          className="border rounded p-2 mb-4 w-full"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border rounded p-2 mb-4 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white rounded p-2 w-full" onClick={handleSignUp}>
          Sign Up
        </button>
        <p className="mt-4" onClick={() => navigate('/')}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
};

export default SignUp;
