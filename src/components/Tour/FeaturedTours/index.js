import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ToursList from '../ToursList';

const getTours = graphql`
  query featuredTours {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
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

const FeaturedTours = () => {
  const {
    featuredTours: { edges: tours },
  } = useStaticQuery(getTours);

  return (
    <ToursList
      tours={tours}
      title="featured"
      subtitle="tours"
      featured="true"
    />
  );
};

export default FeaturedTours;
