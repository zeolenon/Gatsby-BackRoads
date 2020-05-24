import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import Layout from '../containers/Layout';
import Banner from '../components/Banner';
import { WhiteButton } from '../styles/Button';

export default function error() {
  return (
    <Layout>
      <Content>
        <Banner title="oops it's a dead end">
          <AniLink fade to="/">
            <WhiteButton>return to home</WhiteButton>
          </AniLink>
        </Banner>
      </Content>
    </Layout>
  );
}

const Content = styled.header`
  background: var(--primaryColor);
  min-height: calc(100vh - 62px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
