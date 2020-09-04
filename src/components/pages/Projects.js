import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import projectList from '../../assets/projects.json';
import Project from '../Project';

import '../Projects.css';

function Projects() {
  const [projects] = useState(projectList);

  return (
    <>
     <Container className='content'>
       <div className=''>
       <h1>Projects</h1>
       <p>Check out some of my work!</p>
       </div>
       
       <div>
        {/* for each project, return a project component with the appropriate information */}
        {projects.map((project) => {
          return (
            <Project 
            key={project.id}
            title={project.title}
            desc={project.description}
            livelink={project.livelink}
            codelink={project.codelink}
            technologies={project.technologies}
            img={project.img}
             />
          );
        })}
     </div>

     </Container>
     
           
    </>
  );
}

export default Projects;
