import React from 'react';
// import router components
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import UI components
import Header from './components/Header.js';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Projects from './components/pages/Projects.js';
import Footer from './components/Footer.js';

// import bootstrap stylesheet to make styles available to all components
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import particles
import particlesConfig from './assets/particlesjs-config.json';
import Particles from 'react-particles-js';

//import fontawesome, add brand icons to library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faEye, faCode, faAngleUp } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelopeSquare, faEye, faCode, faAngleUp);

function App() {
  return (

    <Router>
      <>
      <Particles params={particlesConfig} />
          <Header />
      
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/about' component={About} />
            <Route
              render={() => (
                <h1 className='text-center'>
                  <span role='img' aria-label='poop emoji'>
                    💩
                </span>{' '}
                Wrong Page!
                </h1>
              )}
            />
        
          <Footer />
          
      </>
    </Router>


  );
}

export default App;
