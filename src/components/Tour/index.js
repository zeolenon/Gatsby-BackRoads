import React from 'react';
import Image from 'gatsby-image';
import { FaMap } from 'react-icons/fa';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from './styles';

const getDefaultImage = graphql`
  query {
    default: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Tour = ({ tour }) => {
  const data = useStaticQuery(getDefaultImage);
  const img = data.default.childImageSharp.fluid;
  const { name, price, country, days, slug, images } = tour;

  const mainImage = images ? images[0].fluid : img;

  return (
    <Container>
      <div className="img-container">
        <Image fluid={mainImage} className="img" alt="single tour" />
        <AniLink className="link" fade to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>
      <div className="footer">
        <h3>{name}</h3>
        <div className="info">
          <h4 className="country">
            <FaMap className="icon" />
            {country}
          </h4>
          <div className="details">
            <h6>{days} days</h6>
            <h6>from {price}</h6>
          </div>
        </div>
      </div>
    </Container>
  );
};

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tour;
