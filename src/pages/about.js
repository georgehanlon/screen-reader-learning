import React from 'react';
import {
  Container,
  Header,
} from 'semantic-ui-react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const AboutPage = () => {
  return (
    <div>
      <Navbar />

      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>About / FAQ</Header>
        <Header as='h3'>What is this site?</Header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere ornare eros id imperdiet. 
          Praesent luctus tempus ipsum ac viverra. Nulla volutpat enim vitae est dictum auctor. 
          Duis imperdiet purus eu tortor laoreet mattis. Orci varius natoque penatibus et magnis dis parturient montes, 
          nascetur ridiculus mus. Maecenas eget ipsum nec eros porta tincidunt. Suspendisse iaculis ultricies pharetra. 
          Donec maximus nunc ut consectetur ultricies. Sed ornare a lorem nec mollis. Vivamus at accumsan libero.
        </p>
        <Header as='h3'>Can I save my progress?</Header>
        <p>
          In eleifend sed arcu pretium rhoncus. Quisque maximus lectus at turpis dictum, eu consequat sapien pulvinar. 
          Donec ac sapien a est dignissim pretium id sit amet risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
          Fusce maximus maximus nunc, sed tristique neque hendrerit vel. Vestibulum finibus semper mi, quis finibus odio. 
          Sed sodales pretium ante, vel molestie mi lobortis in. Morbi tempus, nibh sed condimentum dapibus, 
          nibh nisi placerat ligula, vel ullamcorper massa arcu sit amet mauris. Nulla ac dui eget arcu tristique condimentum. 
          Fusce scelerisque vehicula metus, eu rhoncus odio auctor quis. Ut tempus fermentum erat a bibendum. 
          Aliquam id neque ornare, convallis enim ut, condimentum ligula. Phasellus suscipit malesuada urna, at cursus velit rutrum vel.
        </p>
        <Header as='h1'>Learn More</Header>
        <Header as='h3'>Screen reader users</Header>
        <p>
          Nullam ut purus sed enim mollis gravida. Proin ullamcorper lorem lectus, consequat vehicula enim tempus eget. 
          Nullam gravida sodales efficitur. Integer quis consectetur lorem. Integer lacus tellus, finibus in iaculis ullamcorper, convallis id sem. 
          Nullam a elit dolor. Integer sed dapibus elit. Cras eget sollicitudin risus, et venenatis eros. Nulla vehicula massa tincidunt mi commodo suscipit. 
          Duis blandit enim non maximus facilisis. Vivamus sit amet dolor quis mi eleifend tincidunt. Vivamus quis tempus ligula. 
          Suspendisse placerat lacus non nibh tincidunt, fringilla vehicula lorem imperdiet.
        </p>
        <Header as='h3'>Developers</Header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere ornare eros id imperdiet. 
          Praesent luctus tempus ipsum ac viverra. Nulla volutpat enim vitae est dictum auctor. 
          Duis imperdiet purus eu tortor laoreet mattis. Orci varius natoque penatibus et magnis dis parturient montes, 
          nascetur ridiculus mus. Maecenas eget ipsum nec eros porta tincidunt. Suspendisse iaculis ultricies pharetra. 
          Donec maximus nunc ut consectetur ultricies. Sed ornare a lorem nec mollis. Vivamus at accumsan libero.
        </p>
      </Container>

      <Footer />
    </div>
  );
}

export default AboutPage;
