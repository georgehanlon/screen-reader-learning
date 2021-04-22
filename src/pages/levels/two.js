// Code: Monkey
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const LevelTwo = () => (
  <div>
    <Grid columns={5}>
      <Grid.Row>
        <Grid.Column>
          <Image src='/magnifier.png' aria-label='Magnifier, The next clue might be something you write with.' style={{ padding: '2em' }} />
        </Grid.Column>
          <Image src='/lightbulb.png' aria-label='Lightbulb, On Good Friday in 1930, the BBC reported, “There is no news.” Instead, they played piano music.' style={{ padding: '2em' }} />
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <Image src='/pen-paper.png' aria-label='Pen and paper, The goal is somewhere you might live.' style={{ padding: '2em' }} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <Image src='/house.png' href='./bear' aria-label='House, You have reached the goal. The code for level 3 is: Bear, B... E... A... R.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default LevelTwo;