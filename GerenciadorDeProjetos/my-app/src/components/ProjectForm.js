import React, { useState } from 'react';

const ProjectForm = () => {
  const [project, setProject] = useState({name: '', description: ''});

  const handleChange = e => {
    setProject({...project, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aqui você chamaria uma ação para adicionar o projeto
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={project.name} placeholder="Nome do Projeto"/>
      <input name="description" onChange={handleChange} value={project.description} placeholder="Descrição do Projeto"/>
      <button type="submit">Adicionar Projeto</button>
    </form>
  );
};

export default ProjectForm;
