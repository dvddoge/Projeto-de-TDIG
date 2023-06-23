import React from 'react';

const ProjectDetailsPage = (props) => {
  // Normalmente, você buscaria detalhes do projeto aqui usando props.match.params.id ou similar

  const project = {}; // Detalhes do projeto viriam aqui

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      {/* Add more project data as needed */}
    </div>
  );
};

export default ProjectDetailsPage;
