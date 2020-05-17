import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';
import links from '../../constants/links';
import socialIcons from '../../constants/social-icons';
import logo from '../../images/logo.svg';
import { Container, Header, Menu, SocialContainer } from './styles';

const Navbar = () => {
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav((open) => !open);
  };

  return (
    <Container>
      <div>
        <Header>
          <img src={logo} alt="BackRoads Logo" />
          <button type="button" onClick={toggleNav}>
            <FaAlignRight className="logo-icon" />
          </button>
        </Header>
        <Menu open={isOpen}>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            );
          })}
        </Menu>
        <SocialContainer>
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
        </SocialContainer>
      </div>
    </Container>
  );
};

export default Navbar;
