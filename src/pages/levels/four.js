// Code: Mouse
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const LevelFour = () => (
  <div>
    <Grid columns={5}>
      <Grid.Row>
        <Grid.Column>
          <Image src='/magnifier.png' aria-label='Magnifier, The next clue is something you might use for directions.' style={{ padding: '2em' }} />      
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <Image src='/book.png' aria-label='Book, Coyotes outpace roadrunners by 23 mph.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <Image src='/compass.png' href='https://www.afb.org/' aria-label='Compass, The next clue is what you might use to write something down.' style={{ padding: '2em' }} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
          <Image src='/house.png' href='https://www.rnib.org.uk/' aria-label='House, The Starry Night depicts Vincent Van Goghs view from the Saint Paul-de-Mausole asylum.' style={{ padding: '2em' }} />
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <Image src='/matches.png' aria-label='Matches, Mosquitoes are attracted to the color blue twice as much as any other color.' style={{ padding: '2em' }} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Image src='/landmark.png' href='./dog' aria-label='Landmark, Did you know that you have reached the goal. The code for level 5 is: Dog, D... O... G.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
          <Image src='/fruit.png' aria-label='Fruit, There are more than 10 million bricks in the Empire State Building.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <Image src='/pen-paper.png' href='https://www.afb.org/' aria-label='Pen and Paper, You have already passed the goal... The goal is something you might see on a map, or go to visit.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
          <Image src='/lightbulb.png' href='./dog' aria-label='Lightbulb, The giant squid has the largest eyes in the world.' style={{ padding: '2em' }} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default LevelFour;