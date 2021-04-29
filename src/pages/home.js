import React from 'react';
import {
  Button,
  Container,
  Header
} from 'semantic-ui-react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import JumpTo from '../components/jumpTo';
  
const HomePage = () => {
  return (
    <div>
      <Navbar />

      <Container text style={{ marginTop: '7em' }} role='main'>
        <Header as='h1'>Screen Reader Skills Development Application</Header>
        <Header as='h2'>Brief introduction</Header>
        <p>
          This website is aimed at screen reader users who wish to improve their skills
          at traversing web pages by playing a treasure-hunt style game. If you are a
          novice looking to develop some skills, or an expert just wanting to practise,
          then this website could be for you.
        </p>
        <Header as='h2'>How to use</Header>
        <p>
          Your usual screen reader controls will apply, and you will use them to navigate
          your way through a series of levels. The aim of each level is to follow the
          clues that you will hear to find the goal which will take you to the next
          level. As your screen reader lands on images on each level, a clue will be
          read out loud which you can use to help find the goal. However, some images
          won't contain clues and will just give you a random fact - which doesn't help
          find the goal at all. Learn to follow clues and quickly navigate through
          elements, but be careful for tricks!
        </p>
        <p>
          You will find a start button below this paragraph which will take you to the
          first level. Below the start button is an input field to use a code to jump
          to a specific level.
        </p>
        <Button color='black' fluid size='large' href='levels/one'>Start</Button>
        <Header as='h2'>Jump to a specific level</Header>
        <JumpTo />
      </Container>

      <Footer />
    </div>
  );
};

export default HomePage;
