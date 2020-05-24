import React from 'react';
import { Container, Center, StyledForm, SubmitButton } from './styles';
import Title from '../../Title';

const Form = () => {
  return (
    <Container>
      <Title title="Contact" subtitle="us" />
      <Center>
        <StyledForm
          action="https://formspree.io/leotassiaus@gmail.com"
          method="POST"
        >
          <div>
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" placeholder="leo zenon" />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leo@zenon.ninja"
            />
          </div>
          <div>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="Lorem ipsum foes dae..."
            />
          </div>
          <div>
            <SubmitButton>Submit Here</SubmitButton>
          </div>
        </StyledForm>
      </Center>
    </Container>
  );
};

export default Form;
