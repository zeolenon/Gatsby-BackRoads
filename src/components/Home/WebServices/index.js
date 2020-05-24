import React from 'react';

import { Container } from './styles';
import Title from '../../Title';
import services from '../../../constants/services';

const WebServices = () => {
  return (
    <Container>
      <Title title="our" subtitle="services" />
      <div>
        {services.map((item, index) => {
          return (
            <article key={index}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </Container>
  );
};

export default WebServices;
