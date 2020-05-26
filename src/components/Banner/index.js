import React from 'react';
import PropTypes from 'prop-types';
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

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  children: PropTypes.shape(),
};

Banner.defaultProps = {
  children: null,
};
