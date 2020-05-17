import React from 'react';
import Title from '../Title';
import { Container, Content, ImageContainer, Text } from './styles';
import img from '../../../images/defaultBcg.jpeg';
import { PrimaryButton } from '../../../styles/Button';

const About = () => {
  return (
    <Container>
      <Title title="about" subtitle="us" />
      <Content>
        <ImageContainer>
          <div>
            <img src={img} alt="about company" />
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
