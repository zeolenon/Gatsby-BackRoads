import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { FaMoneyBillWave, FaMap } from 'react-icons/fa';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Container } from './styles';
import Layout from '../Layout';
import StyledHero from '../../components/StyledHero';
import TourDay from '../../components/Tour/TourDay';
import { PrimaryButton } from '../../styles/Button';

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey,
  } = data.singleTour;
  const [mainImage, ...tourImages] = images;
  const defaultImage = data.defaultTour;

  return (
    <Layout>
      <StyledHero img={mainImage.fluid || defaultImage.childImageSharp.fluid} />
      <Container>
        <div className="center">
          <div className="images">
            {tourImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single tour"
                  className="image"
                />
              );
            })}
          </div>
          <h2>{name}</h2>
          <div className="info">
            <p>
              <FaMoneyBillWave className="icon" />
              starting from ${price}
            </p>
            <p>
              <FaMap className="icon" />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days}</h4>
          <p className="desc">{description}</p>
          <h2>daily schedule</h2>
          <div className="journey">
            {journey.map((item, index) => {
              return <TourDay key={index} day={item.day} info={item.info} />;
            })}
          </div>
          <AniLink fade to="/tours">
            <PrimaryButton>back to tours</PrimaryButton>
          </AniLink>
        </div>
      </Container>
    </Layout>
  );
};

export default TourTemplate;

TourTemplate.propTypes = {
  data: PropTypes.shape({
    singleTour: PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      days: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(PropTypes.object).isRequired,
      description: PropTypes.object.isRequired,
      start: PropTypes.string.isRequired,
      journey: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    defaultTour: PropTypes.shape({
      childImageSharp: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    singleTour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    defaultTour: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
