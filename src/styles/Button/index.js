import styled from 'styled-components';

export const Button = styled.button.attrs((props) => ({
  type: 'button',
}))`
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  color: var(--mainWhite);
  border: 2px solid var(--mainWhite);
  padding: 0.9rem 1.6rem;
  display: inline-block;
  transition: var(--mainTransition);
  cursor: pointer;
`;

export const WhiteButton = styled(Button)`
  background: transparent;
  &:hover {
    background: var(--mainWhite);
    color: var(--primaryColor);
  }
`;

export const PrimaryButton = styled(Button)`
  background: var(--primaryColor);
  color: var(--mainWhite);
  border: 2px solid var(--primaryColor);
  &:hover {
    background: transparent;
    color: var(--primaryColor);
  }
`;
