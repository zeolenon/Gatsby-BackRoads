import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/Layout';
import StyledHero from '../components/StyledHero';
import Form from '../components/Contact/Form';

export default function contact({ data }) {
  return (
    <Layout>
      <StyledHero img={data.connectBcg.childImageSharp.fluid} />
      <Form />
    </Layout>
  );
}

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
