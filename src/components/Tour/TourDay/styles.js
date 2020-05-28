import styled from 'styled-components';

export const Container = styled.article`
  margin: 2rem 0;

  h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  .btn svg {
    font-size: 1.5rem;
    color: var(--primaryColor);
  }
  p {
    line-height: 2;
    transition: var(--mainTransition);
  }
  @media screen and (min-width: 992px) {
    h4 {
      width: 400px;
    }
  }
`;
