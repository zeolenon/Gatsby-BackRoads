import React from 'react';
// import { Container } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import ToursList from '../ToursList';

const getTours = graphql`
  query allTours {
    allTours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const Tours = () => {
  const {
    allTours: { edges: tours },
  } = useStaticQuery(getTours);

  return <ToursList tours={tours} title="our" subtitle="tours" />;
};

export default Tours;
