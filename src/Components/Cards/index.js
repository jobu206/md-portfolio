import React from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow
} from 'mdbreact';
import Container from '../Container';
import data from './data';

const Portfolio = () => {
  return (
    <Container>
      <h1 className='font-weight-light text-center text-lg text-lg-left mt-5'>
        Portfolio
      </h1>
      <hr />
      <MDBCol className='mb-r'>
        <MDBRow className='text-center'>
          {data.projects.map(project => (
            <MDBCard
              key={project.image}
              className='mr-md-3 mb-md-3'
              style={{ width: '22rem' }}
            >
              <MDBCardImage
                key={project.image}
                className='img-fluid'
                src={project.image}
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>{project.title}</MDBCardTitle>
                <MDBCardText>{project.description}</MDBCardText>
                <MDBBtn
                  color='grey'
                  className='grey accent-4'
                  href={project.projUrl}
                  target='_blank'
                >
                  Project
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          ))}
        </MDBRow>
      </MDBCol>
    </Container>
  );
};

export default Portfolio;
