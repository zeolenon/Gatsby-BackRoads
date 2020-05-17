import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: auto;
  background: var(--mainBlack);
  padding: 2rem;
  text-align: center;
  color: var(--mainWhite);
`;
export const LinksContainer = styled.div`
  a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--mainWhite);
    margin: 0.5rem 1rem;
    letter-spacing: var(--mainSpacing);
    transition: var(--mainTransition);
    font-weight: bold;
  }
  a:hover {
    color: var(--primaryColor);
  }
`;

export const IconsContainer = styled.div`
  a {
    display: inline-block;
    margin: 1rem;
    font-size: 1.3rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  a:hover {
    color: var(--primaryColor);
  }
`;

export const CopyRight = styled.div`
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  line-height: 2;
`;
