import React from 'react';
import ProjectForm from './ProjectForm';

const ProjectsPage = () => {
  // Aqui, normalmente, você buscaria a lista de projetos do servidor

  const projects = []; // Dados do projeto viriam aqui

  return (
    <div>
      <h2>Projetos</h2>
      <ProjectForm />
      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          {/* Add more project data as needed */}
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
