import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import StyledHero from '../components/StyledHero';
import Layout from '../templates/Layout';
import AllTours from '../components/Tour/AllTours';

export default class tours extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <StyledHero img={data.toursBcg.childImageSharp.fluid} />
        <AllTours />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    toursBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

tours.propTypes = {
  data: PropTypes.shape({
    toursBcg: PropTypes.object.isRequired,
  }).isRequired,
};
