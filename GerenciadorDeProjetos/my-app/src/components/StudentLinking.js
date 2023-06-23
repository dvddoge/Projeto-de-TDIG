import React, { useState } from 'react';

const StudentLinking = () => {
  const [student, setStudent] = useState({name: '', projectId: ''});

  const handleChange = e => {
    setStudent({...student, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aqui você chamaria uma ação para linkar o estudante ao projeto
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={student.name} placeholder="Nome do Estudante"/>
      <input name="projectId" onChange={handleChange} value={student.projectId} placeholder="ID do Projeto"/>
      <button type="submit">Linkar Estudante</button>
    </form>
  );
};

export default StudentLinking;
