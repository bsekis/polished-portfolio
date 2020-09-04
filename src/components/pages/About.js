import React from 'react';
import { Container, ButtonGroup, Button, Image } from 'react-bootstrap';

import resumePdf from '../../assets/BenSEkisResumeFINAL.pdf';
import mePic from '../../assets/port-image.jpg';

function About() {
  return (
    <>
      <Container className='content'>
        <h1>about me</h1>
        <div class='introduction'>
          <div class='proPic'>
              {/* insert css avatar here */}
              <Image rounded alt='Ben' src={mePic} />
          </div>
          <p>I'm passionate about interaction design, front end development, and improving user experiences!</p>
          <p> My current tech stack of choice is MERN, so I'm not only proficient with HTML, CSS and JavaScript, but also with Mongo, Express, React, and Node.js. I also have experience with jQuery,Java, JSON, JWT, Mongoose, Sequelize, MySQL, Handlebars, APIs, Git, Github, and Bootstrap. </p>
          <p> Currently, I'm enrolled in a Full Stack coding bootcamp where I've gained experience in quickly adapting new tools to build web applications individually and collaboratively using the MERN stack.</p>
          <p>I've been working on building my design skills in my free time: as of late, that's been CSS mini-projects. In my free time I enjoy watching sports, video games and experimenting with new recipes.</p>
        </div>
        <div className='resume'>
          <h5>Check out my resume!</h5>
          <ButtonGroup>
          <Button href={resumePdf} target='_blank' rel="noopener noreferrer" className='cusBtn'> 
                resume.pdf
            </Button>
            <Button href='https://docs.google.com/document/d/1RJVKbs8Z2VTVuVhSy4nDGHqL3kZWf6VC0neHby_V2xo/edit?usp=sharing' target='_blank' rel="noopener noreferrer" className='cusBtn'>
              resume.gdoc
            </Button>
          </ButtonGroup>
        </div>
      </Container>
    </>
  );
}

export default About;
