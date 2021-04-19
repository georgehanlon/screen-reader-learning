import React from 'react';
import {
  Container,
  Header,
} from 'semantic-ui-react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const NotFoundPage = () => {
  return (
    <div>
      <Navbar />

      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>404 page not found</Header>
        <p>
          Looks like you might be lost! Use the navigation bar to return
           to the home or about page.
        </p>
      </Container>
    </div>
  );
}

export default NotFoundPage;
