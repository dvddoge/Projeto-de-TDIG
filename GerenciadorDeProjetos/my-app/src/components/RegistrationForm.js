import React, { useState } from 'react';

const RegistrationForm = () => {
  const [user, setUser] = useState({name: '', email: '', password: ''});

  const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aqui você chamaria uma ação para registrar o usuário
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={user.name} placeholder="Nome"/>
      <input name="email" type="email" onChange={handleChange} value={user.email} placeholder="Email"/>
      <input name="password" type="password" onChange={handleChange} value={user.password} placeholder="Senha"/>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegistrationForm;
