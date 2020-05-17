import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  letter-spacing: var(--mainSpacing);
  color: var(--mainWhite);

  h1 {
    font-size: 3.3rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 0 1rem;
    letter-spacing: 6px;
  }
  p {
    width: 85%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 4.5rem;
    }
    p {
      width: 70%;
    }
  }
`;
