import React from 'react';
import {
  Container,
  Header,
  List,
} from 'semantic-ui-react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const AboutPage = () => {
  return (
    <div>
      <Navbar />

      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>About / FAQ</Header>
        <Header as='h3'>What is this website?</Header>
        <p>
          This website is an application which was created to facilitate the improvement of
           screen reader skills. Some of the skills that may be improved are: familiarity with
           screen reader controls; speed of traversing web page elements; changing 'views' between
           element layers; and understanding of web page layouts.
        </p>
        <Header as='h3'>Can I save my progress?</Header>
        <p>
          At the end of each level, the "treasure" element will act as a button to take you to the
           next level. It will also read a code through the screen reader which you can take note
           of. Use this code on the home page in the "Jump to a specific level" section to jump to
           where you left off!
        </p>
        <Header as='h1'>Learn More</Header>
        <Header as='h3'>Screen reader users</Header>
        <p>
          There are lots of resources to help you learn more about how to use screen readers, such
           as guides, training videos, and charitable organisations. Listed below is a collection
           of resources that may help.
        </p>
        <Header as='h4'>Reader-specific guides</Header>
        <List bulleted>
          <List.Item href='https://www.freedomscientific.com/training/jaws/' target='_blank'>
            JAWS Training
            <List.Description>Contains great video tutorials and links to more information.</List.Description>
          </List.Item>
          <List.Item href='https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1' target='_blank'>
            Windows Narrator Documentation
            <List.Description>Contains useful shortcuts and extensive documentation.</List.Description>
          </List.Item>
          <List.Item href='https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1' target='_blank'>
            NVDA User Guide
            <List.Description>Contains extensive documentation for using NVDA.</List.Description>
          </List.Item>
          <List.Item href='https://help.apple.com/voiceover/info/guide/10.8/English.lproj/index.html' target='_blank'>
            Apple VoiceOver Getting Started
            <List.Description>Contains extensive documentation for using VoiceOver.</List.Description>
          </List.Item>
        </List>
        <Header as='h4'>Charitable Organisations</Header>
        <List bulleted>
          <List.Item href='https://www.rnib.org.uk/sight-loss-advice/technology-and-useful-products/technology-resource-hub-latest-facts-tips-and-guides/screen-reading-software' target='_blank'>
            RNIB Screen Reader Overview
            <List.Description>Contains general overview of screen readers for beginners and has grants for accessing software.</List.Description>
          </List.Item>
          <List.Item href='https://www.rsbc.org.uk/young_people/using-technology-when-living-with-sight-loss/' target='_blank'>
            RSBC Assistive Technology for Children
            <List.Description>Great article about screen readers and assitive technology for children with sight loss.</List.Description>
          </List.Item>
          <List.Item href='https://abilitynet.org.uk/factsheets/introduction-screen-readers' target='_blank'>
            AbilityNet Introduction to Screen Readers
            <List.Description>Contains general overview of screen readers for beginners and has help resources.</List.Description>
          </List.Item>
          <List.Item href='https://www.afb.org/blindness-and-low-vision/using-technology/assistive-technology-products/screen-readers' target='_blank'>
            AFB Screen Reader Overview
            <List.Description>Contains general overview of screen readers for beginners and list of available software.</List.Description>
          </List.Item>
        </List>
        <Header as='h3'>Developers</Header>
        <p>
          It is often useful for developers to use the above resources to improve their
           own screen reader skills as it creates an appreciation for how website design
           can impact screen reader users. Below is a list of useful resources which
           highlight different issues and give various technical information to improve
           website design:
        </p>
        <List bulleted>
          <List.Item href='https://www.codecademy.com/articles/how-to-setup-screen-reader' target='_blank'>
            Codecademy Screen Readers
            <List.Description>Great article and introduction to screen readers from a developers perspective.</List.Description>
          </List.Item>
          <List.Item href='https://webaim.org/techniques/screenreader/' target='_blank'>
            WebAIM Designing for Screen Reader Compatibility
            <List.Description>Highlights document language option and tips on viewing your work from a screen reader users perspective.</List.Description>
          </List.Item>
          <List.Item href='https://www.w3.org/WAI/standards-guidelines/' target='_blank'>
            W3C Accessibility Guidelines
            <List.Description>An extensive but easy to understand and in-depth documentation of web accessibility guidelines.</List.Description>
          </List.Item>
        </List>
      </Container>

      <Footer />
    </div>
  );
}

export default AboutPage;
