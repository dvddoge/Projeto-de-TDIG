import React, { useState } from 'react';
import { loginUser } from '../../api/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await loginUser(email, password);
      if (token) {
        localStorage.setItem('jwtToken', token);
      } else {
        // handle login failure
        console.error('Falha na autenticação');
      }
    } catch (error) {
      // handle other errors
      console.error(error);
    }
  };  

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
