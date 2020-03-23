import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './Home.css';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className='landing text-center'>
        <div className='landingText'>
          <Fade bottom cascade>
            You are never too old to set another goal or to dream a new dream.
          </Fade>
          <div className='minorText'>
            <Fade bottom cascade>
              ~C.S. Lewis
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
