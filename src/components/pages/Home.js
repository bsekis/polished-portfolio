import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Container className='content'>
        <div> 
          <h1>Hey, I'm<span class='em1'> Ben</span>! 👋  </h1>
          <h3>Full Stack Web Developer seeking <span className='em1'>Front End</span> roles.</h3>
          <p className>Check out <Link as={Link} to='/projects'>some of my work </Link>and learn a bit more <Link as={Link} to='/about'>about me</Link>. </p>
          <p>I'm always learning more, so feel free to <a href='mailto:bsekis21@gmail.com' target='_blank' rel="noopener noreferrer">reach out</a> if you have some advice or want to work together!</p>
        </div>
      </Container>
    </>
  );
}

export default Home;
