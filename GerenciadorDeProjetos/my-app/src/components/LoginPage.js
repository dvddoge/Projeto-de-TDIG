import React from 'react';
import RegistrationForm from './RegistrationForm';
import Authentication from './Authentication';

const LoginPage = () => {
  return (
    <div>
      <h2>Login</h2>
      <Authentication />
      <h2>Registro</h2>
      <RegistrationForm />
    </div>
  );
};

export default LoginPage;
