import styled from 'styled-components';

export const Container = styled.nav`
  @media (min-width: 576px) {
    padding: 0 2rem;
  }
  @media (min-width: 992px) {
    div {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;

  button {
    background: transparent;
    border: none;
    outline: none;
  }
  button:hover {
    cursor: pointer;
  }
  .logo-icon {
    color: var(--mainBlack);
    font-size: 1.5rem;
  }

  .logo-icon:hover {
    color: var(--primaryColor);
  }

  @media (min-width: 992px) {
    button {
      display: none;
    }
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  transition: var(--mainTransition);
  height: ${(props) => (props.open ? '216px' : '0')};
  overflow: hidden;

  a {
    display: block;
    padding: 1rem 1.25rem;
    text-decoration: none;
    text-transform: capitalize;
    color: var(--mainBlack);
    transition: var(--mainTransition);
    font-weight: bold;
    letter-spacing: var(--mainSpacing);
  }

  a:hover {
    color: var(--primaryColor);
  }

  @media (min-width: 992px) {
    height: auto;
    display: flex;
  }
`;

export const SocialContainer = styled.div`
  display: none;

  @media screen and (min-width: 992px) {
    display: flex;
    line-height: 0;

    a {
      color: var(--primaryColor);
      margin: 0 0.5rem;
      font-size: 1.2rem;
      transition: var(--mainTransition);
    }
    a:hover {
      color: var(--mainBlack);
      transform: translateY(-5px);
    }
  }
`;
