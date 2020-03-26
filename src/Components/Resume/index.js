import React from 'react';
import Container from '../Container';
import ReactEmbedGist from 'react-embed-gist';
import myStyle from './mystyle.module.css';

const Resume = () => {
  return (
    <Container>
      <ReactEmbedGist
        className={myStyle.a}
        gist='jobu206/83f1c3479a353b4f7ede00cebff5abaf'
      />
    </Container>
  );
};

export default Resume;
