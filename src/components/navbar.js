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
          <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
          SRL
        </Menu.Item>
        <Menu.Item as='a' href='/'>Home</Menu.Item>
        <Menu.Item as='a' href='/about'>About</Menu.Item>
      </Container>
    </Menu>
  );
}

export default Navbar;
