import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../containers/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import WebServices from '../components/Home/WebServices';
import { WhiteButton } from '../styles/Button';
import FeaturedTours from '../components/Tour/FeaturedTours';

const index = ({ data: { homeBcg } }) => {
  return (
    <Layout>
      <StyledHero home="true" img={homeBcg.childImageSharp.fluid}>
        <Banner
          title="continue exploring"
          info="Lorem ipsum 2 sit amet consectetur adipisicing elit."
        >
          <AniLink fade to="/tours">
            <WhiteButton>explore tours</WhiteButton>
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <WebServices />
      <FeaturedTours />
    </Layout>
  );
};

export default index;

export const query = graphql`
  query {
    homeBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

index.propTypes = {
  data: PropTypes.shape({
    homeBcg: PropTypes.object.isRequired,
  }).isRequired,
};
