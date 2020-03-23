import React from 'react';
import './style.css';
import { MDBContainer, MDBRow } from 'mdbreact';
import data from './data.json';

const Tech = ({ image, altText }) => (
  <div className='col-lg-3 col-md-6 pt-4 text-center'>
    <img src={image} alt={altText} className='langs' />
  </div>
);

const Technology = () => {
  return (
    <>
      <MDBContainer className='mt-5'>
        <h1 className='tech'>Technology</h1>
        <hr />
        <MDBRow className='techNames pb-md-5'>
          {data.map(props => (
            <Tech key={props.id} image={props.image} altText={props.altText} />
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Technology;
