import React from 'react';
import PropTypes from 'prop-types';
import { BcgContainer } from './styles';

const StyledHero = ({ img, children, home }) => {
  return (
    <BcgContainer fluid={img} home={home}>
      {children}
    </BcgContainer>
  );
};

export default StyledHero;

StyledHero.propTypes = {
  img: PropTypes.shape().isRequired,
  home: PropTypes.string,
  children: PropTypes.shape(),
};

StyledHero.defaultProps = {
  home: null,
  children: null,
};
