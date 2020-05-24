import React from 'react';
import { graphql } from 'gatsby';
import StyledHero from '../components/StyledHero';
import Layout from '../containers/Layout';
import Images from '../components/Examples/Images';

const blog = ({ data }) => {
  return (
    <Layout>
      <h1>Hello leozinho!! From Blog 2</h1>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
      <Images />
    </Layout>
  );
};

export default blog;

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

/*
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          data {
            name
          }
        }
      }
      allFile(filter: { relativeDirectory: { eq: "tour-images" } }) {
        totalCount
        edges {
          node {
            name
            size
            extension
          }
        }
      }
    }
  `);
  console.log(props);
*/
