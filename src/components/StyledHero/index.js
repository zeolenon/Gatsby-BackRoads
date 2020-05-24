import React from 'react';
import { BcgContainer } from './styles';

const StyledHero = ({ img, className, children, home }) => {
  return (
    <BcgContainer className={className} fluid={img} home={home}>
      {children}
    </BcgContainer>
  );
};

export default StyledHero;
