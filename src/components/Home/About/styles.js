import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem 0;
`;

export const Content = styled.div`
  width: 80vw;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3rem;
    align-items: center;
    margin-top: 3rem;
  }

  @media (min-width: 1200px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

export const ImageContainer = styled.article`
  margin: 3rem 0;
  position: relative;
  img {
    width: 100%;
    display: block;
    box-shadow: var(--lightShadow);
  }
  div {
    box-shadow: var(--lightShadow);
  }

  @media (min-width: 768px) {
    margin: 0;
    max-height: 500px;

    div {
      max-height: 500px;
    }
  }

  @media (min-width: 992px) {
    div::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid var(--primaryColor);
      box-sizing: border-box;
      top: -16px;
      left: -16px;
      z-index: -1;
    }
  }
`;

export const Text = styled.article`
  margin-top: 3rem;

  h4 {
    font-size: 1.9rem;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    margin: 0;

    p {
      width: 80%;
    }
  }
`;
