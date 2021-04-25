import React from 'react';
import Container from '../components/Container';

function About () {
  return (
    <Container>
      <div className='views-content'>
        <h1 className='views-title'>Awesome Kanban Board in the world!</h1>
        <p className='views-text'>
          The Kanban Board was made by Almat Kambetov for the course specialization "Frontend-developer" in 2021
        </p>
        <p className='views-text'>
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum `has been the industry's 
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
          a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker incl`uding versions of Lorem Ipsum.
        </p>
      </div>
    </Container>
  );
}

export default About;