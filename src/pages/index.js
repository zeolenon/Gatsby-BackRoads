import React from 'react';
import { Link } from 'gatsby';
import Layout from '../containers/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import WebServices from '../components/Home/WebServices';
import { WhiteButton } from '../styles/Button';

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="Lorem ipsum 2 sit amet consectetur adipisicing elit."
      >
        <Link to="/tours">
          <WhiteButton>explore tours</WhiteButton>
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <WebServices />
  </Layout>
);
