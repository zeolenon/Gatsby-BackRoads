import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import img from '../../../images/connectBcg.jpeg';
import { Container } from './styles';

const getImages = graphql`
  query Images {
    fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Images = () => {
  const data = useStaticQuery(getImages);

  return (
    <Container>
      <article>
        <h3>basic image</h3>
        <img src={img} alt="first shot" className="basic" />
      </article>
      <article>
        <h3>fixed image / blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>fluid img / svg</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </Container>
  );
};

export default Images;
