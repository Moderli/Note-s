import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logged in with:', email, password);
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center h-screen p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4">Login</h2>
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
        <button className="bg-blue-500 text-white rounded p-2 w-full" onClick={handleLogin}>
          Login
        </button>
        <p className="mt-4" onClick={() => navigate('/signup')}>
          Don't have an account? Sign Up
        </p>
      </div>
    </div>
  );
};

export default Login;
