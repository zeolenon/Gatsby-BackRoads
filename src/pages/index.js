import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../containers/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import WebServices from '../components/Home/WebServices';
import { WhiteButton } from '../styles/Button';

export default ({ data: { homeBcg } }) => (
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
  </Layout>
);

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
