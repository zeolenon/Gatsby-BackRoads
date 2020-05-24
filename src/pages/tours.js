import React, { Component } from 'react';
import { graphql } from 'gatsby';
import StyledHero from '../components/StyledHero';
import Layout from '../containers/Layout';

export default class tours extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <StyledHero img={data.toursBcg.childImageSharp.fluid} />
        <div>Hello from tours page!!!</div>
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
