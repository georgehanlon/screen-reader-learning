import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const LevelOne = () => (
  // Images by the Noun Project
  <div>
    <Grid columns={5}>
      <Grid.Row>
        <Grid.Column>
          <Image src='/magnifier.png' aria-label='Magnifier, The next clue might be something you write with.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <Image src='/pen-paper.png' aria-label='Pen and paper, The goal is something you can eat.' style={{ padding: '2em' }} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <Image src='/fruit.png' href='./monkey' aria-label='Fruit, You have reached the goal. The code for level 2 is: Monkey, M... O... N... K... E... Y.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default LevelOne;
