import React from 'react';
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
        <Container textAlign='center'>
          <Grid divided inverted stackable>
            <Grid.Column width={3}>
              <Header inverted as='p' content='Site Links' />
              <List link inverted>
                <List.Item as='a' href='/'>Home</List.Item>
                <List.Item as='a' href='/about'>About</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='p' content='User Resources' />
              <List link inverted>
                <List.Item as='a' href='https://www.rnib.org.uk/sight-loss-advice/technology-and-useful-products/technology-resource-hub-latest-facts-tips-and-guides/screen-reading-software'>
                  RNIB
                </List.Item>
                <List.Item as='a' href='https://www.rsbc.org.uk/young_people/using-technology-when-living-with-sight-loss/'>
                  RSBC
                </List.Item>
                <List.Item as='a' href='https://www.afb.org/blindness-and-low-vision/using-technology/assistive-technology-products/screen-readers'>
                  AFB
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='p' content='Developer Resources' />
              <List link inverted>
                <List.Item as='a' href='https://www.w3.org/WAI/standards-guidelines/'>W3C Guidelines</List.Item>
                <List.Item as='a' href='https://www.codecademy.com/articles/how-to-setup-screen-reader'>Codecademy</List.Item>
                <List.Item as='a' href='https://webaim.org/techniques/screenreader/'>WebAIM</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as='p' content='Screen Reader Skills Development Application' />
              <p>
                Developed for final year project.
              </p>
            </Grid.Column>
          </Grid>
  
          <Divider inverted section />
          <Image aria-label='logo' centered size='mini' src='/logo.jpg' />
        </Container>
      </Segment>
  );
}

export default Footer;
