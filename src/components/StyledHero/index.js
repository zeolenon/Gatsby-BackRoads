import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { BcgContainer } from './styles';

const getDefaultBcg = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const StyledHero = ({ img, children, home }) => {
  const data = useStaticQuery(getDefaultBcg);

  return (
    <BcgContainer
      fluid={img || data.defaultBcg.childImageSharp.fluid}
      home={home}
    >
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
