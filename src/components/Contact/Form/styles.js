import styled from 'styled-components';

export const Container = styled.section`
  padding: 4rem 0;
`;

export const Center = styled.div`
  width: 80vw;
  margin: 0 auto;

  @media (min-width: 992px) {
    width: 50vw;
    margin: 0 auto;
  }
`;

export const StyledForm = styled.form`
  div {
    input,
    textarea {
      width: 100%;
      font-size: 1rem;
      margin-bottom: 1rem;
      padding: 0.375rem 0.75rem;
      border: 1px solid var(--darkGrey);
      border-radius: 0.25rem;
    }
    label {
      text-transform: capitalize;
      display: block;
      margin-bottom: 0.5rem;
    }
  }
`;
export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
}))`
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--darkGrey);
  border-radius: 0.25rem;
  background-color: var(--primaryColor);
  border-color: var(--primaryColor);
  text-transform: uppercase;
  color: var(--mainBlack);
  transition: var(--mainTransition);
  cursor: pointer;
  &:hover {
    background: var(--darkGrey);
    color: var(--mainWhite);
    border-color: var(--darkGrey);
  }
`;
