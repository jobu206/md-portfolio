import React from 'react';

const Jumbotron = props => {
  return (
    <div className='jumbotron' style={{ border: 'none' }}>
      {props.children}
    </div>
  );
};

export default Jumbotron;
