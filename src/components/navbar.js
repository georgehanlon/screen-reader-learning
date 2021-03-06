import React from 'react';
import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' href='/' header>
          <Image aria-label='logo' size='mini' src='/logo.jpg' style={{ marginRight: '1.5em' }} />
          Screen Reader Skills
        </Menu.Item>
        <Menu.Item as='a' href='/'>Home</Menu.Item>
        <Menu.Item as='a' href='/about'>About</Menu.Item>
      </Container>
    </Menu>
  );
}

export default Navbar;
