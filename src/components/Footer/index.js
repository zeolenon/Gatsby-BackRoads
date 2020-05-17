import React from 'react';
import { Link } from 'gatsby';
import links from '../../constants/links';
import socialIcons from '../../constants/social-icons';
import { IconsContainer, Container, LinksContainer, CopyRight } from './styles';

const Footer = () => {
  return (
    <Container>
      <LinksContainer>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          );
        })}
      </LinksContainer>
      <IconsContainer>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {item.icon}
            </a>
          );
        })}
      </IconsContainer>
      <CopyRight>
        copyright &copy; backroads travel company {new Date().getFullYear()} all
        rights reserved
      </CopyRight>
    </Container>
  );
};

export default Footer;
