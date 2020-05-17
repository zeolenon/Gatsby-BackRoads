import styled from 'styled-components';

export const Container = styled.section`
  background: var(--mainGrey);
  padding: 4rem 0;

  div {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 2rem;
  }
  article {
    margin: 2rem 0;
    text-align: center;
  }
  article span {
    background: var(--primaryColor);
    padding: 0.5rem;
    display: inline-block;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  article h4 {
    text-transform: uppercase;
  }
`;
