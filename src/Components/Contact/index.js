import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { GoGist } from 'react-icons/go';
import Jumbotron from '../Jumbotron';
import Container from '../Container';
import './contact.css';
import data from './data';

const Contact = () => {
  return (
    <main className='flex-shrink-0 mt-2'>
      <Container>
        <h1 className='font-weight-light text-center text-lg text-lg-left mt-5'>
          {data.header}
        </h1>
        <hr />
        <Jumbotron>
          <p className='lead'>{data.lead}</p>
          <div className='ml-5'>
            <ul className='list-inline'>
              <li className='list-inline-item mt2'>
                <a href='tel:+12067786668'>
                  <FaPhone className='pr-2 fa-2x' />
                  <span className='contact'>206.778.6668</span>
                </a>
              </li>
            </ul>
            <ul className='list-inline'>
              <li className='list-inline-item mt-2'>
                <a href='mailto:kevin@kevinleroy.me'>
                  <FaEnvelope className='pr-2 fa-2x' />
                  <span className='contact'>kevin@kevinleroy.me</span>
                </a>
              </li>
            </ul>
            <ul className='list-inline'>
              <li className='list-inline-item mt-2'>
                <a
                  href='https://github.com/klleroy'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub className='pr-2 fa-2x' />
                  <span className='contact'>GitHub</span>
                </a>
              </li>
            </ul>
            <ul className='list-inline'>
              <li className='list-inline-item mt-2'>
                <a
                  href='https://linkedin.com/in/kevinleroy'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLinkedin className='pr-2 fa-2x' />
                  <span className='contact'>LinkedIn</span>
                </a>
              </li>
            </ul>
            <ul className='list-inline'>
              <li className='list-inline-item mt-2'>
                <Link to='/resume'>
                  <GoGist className='pr-2 fa-2x' />{' '}
                  <span className='contact'>Resume</span>
                </Link>
              </li>
            </ul>
          </div>
        </Jumbotron>
      </Container>
    </main>
  );
};

export default Contact;
