// Code: Bear
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const LevelThree = () => (
  <div>
    <Grid columns={5}>
      <Grid.Row>
        <Grid.Column>
          <Image src='/fruit.png' aria-label='Fruit, In a 2004 episode of Sesame Street, Cookie Monster revealed that before he started eating cookies his name was Sid.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <Image src='/book.png' aria-label='Book, The next clue is something in the sky.' style={{ padding: '2em' }} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <Image src='/city.png' href='https://www.rnib.org.uk/' aria-label='City, A group of clowns is sometimes called a giggle.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <Image src='/sun.png' aria-label='Sun, The goal is something you might start a fire with.' style={{ padding: '2em' }} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <Image src='/matches.png' href='./mouse' aria-label='Matches, You have reached the goal. The code for level 4 is: mouse, M... O... U... S... E.' style={{ padding: '2em' }} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default LevelThree;