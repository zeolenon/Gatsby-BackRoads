import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Title from '../../Title';
import { Container, Content, ImageContainer, Text } from './styles';
import { PrimaryButton } from '../../../styles/Button';

const getImages = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const {
    aboutImage: { childImageSharp },
  } = useStaticQuery(getImages);

  return (
    <Container>
      <Title title="about" subtitle="us" />
      <Content>
        <ImageContainer>
          <div>
            <Img fluid={childImageSharp.fluid} alt="about company" />
          </div>
        </ImageContainer>
        <Text>
          <h4>explore the differnece</h4>
          <p>
            Anim incididunt laborum voluptate Lorem aliqua aliquip dolor. Lorem
            incididunt duis aute nulla cupidatat non est eu velit officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cum
            quasi excepturi numquam aut, nesciunt voluptas omnis iure.
          </p>
          {/** css global -> btn-primary */}
          <PrimaryButton>read more</PrimaryButton>
        </Text>
      </Content>
    </Container>
  );
};

export default About;
