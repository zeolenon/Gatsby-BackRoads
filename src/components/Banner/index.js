import React from 'react';
import { Container } from './styles';

const Banner = ({ title, info, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </Container>
  );
};

export default Banner;
