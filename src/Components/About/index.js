import React from 'react';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Container from '../Container';
import Me from './profile.jpg';
import './style.css';

const bios = [
  'I am a collaborative and solutions driven Full Stack Web Developer specializing in the MERN Stack with over ten years of technical experience in both QA Automation and Program Management. Effective at coupling creativity, critical thinking, and problem solving to develop effective solutions positively impacting the business and customer.',

  "On a personal level, I have several passions that keep me busy outside of work and school. First and foremost, I have 2 young daughters who mean the world to me. We are a loving family filled with lots of laughter and lots of love. When I'm not hanging with the family, I enjoy watching Sports. I especially love watching Baseball and Basketball. Ever since I was a little kid growing up in the Bay Area, I have loved Baseball. My Grandfather used to take my Brother and me up to SF to see the Giants or over to Oakland to see the A's There's nothing better than going to a Baseball Game in Summer. Now that I'm grown and have a family, I get to share that passion with my girls who love going to Baseball Games.",

  "I love Web Development for many reasons. Not least of which is the ability to tell someone's story. To help people connect to one another or to learn more about the values of a particular person or company is, for me, particularly enjoyable. I also love learning new things and see how I can incorproate the two into my project.",
  'I would love to bring my passion for quality and technology to your company. I look forward to hearing from you!'
];

const About = () => {
  return (
    <>
      <MDBContainer className='mt-5'>
        <MDBRow>
          <MDBCol>
            <h1 className='about-me'>About Me</h1>
            <hr />
            <MDBJumbotron className='mt-4'>
              <img src={Me} alt='thumbnail' className='img-thumbnail' />
              <Container>
                {bios.map((bio, key) => (
                  <p key={key}>{bio}</p>
                ))}
              </Container>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default About;
