// Code: Dog
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const LevelFive = () => (
  <div>
    <Grid columns={5}>
      <Grid.Row>
        <Grid.Column>
          <Image src='/fruit.png' aria-label='Fruit, The next clue is something that you might put in a lamp.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
          <Image src='/house.png' aria-label='House, A snail can sleep for three years.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
          <Image src='/landmark.png' aria-label='Landmark, In Tokyo, a bicycle is faster than a car for most trips of less than 50 minutes.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
          <Image src='/lightbulb.png' aria-label='Lightbulb, The next clue is at something you might read.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
          <Image src='/magnifier.png' href='https://www.rnib.org.uk/' aria-label='Magnifier, Oak trees are struck by lightning more than any other tree.' style={{ padding: '2em' }} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Image src='/matches.png' aria-label='Matches, A hedgehogs heart beats 300 times a minute on average.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
          <Image src='/pen-paper.png' href='https://www.afb.org/' aria-label='Pen and Paper, Your hair grows faster in the morning than at any other time of day.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
          <Image src='/sun.png' aria-label='Sun, Female canaries cannot sing.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
          <Image src='/book.png' aria-label='Book, The goal is five items along.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
          <Image src='/city.png' aria-label='City, The longest word in the English language with no vowels is Rhythms.' style={{ padding: '2em' }} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Image src='/landmark.png' href='https://www.rnib.org.uk/' aria-label='Landmark, Your brain is 80% water.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
          <Image src='/magnifier.png' aria-label='Magnifier, Anteaters prefer termites to ants.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
          <Image src='/fruit.png' aria-label='Fruit, From the age of thirty, humans gradually begin to shrink in size.' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
          <Image src='/pen-paper.png' href='/' aria-label='Pen and Paper, You have reacghed the goal. Well done for completing all the levels!' style={{ padding: '2em' }} />
        </Grid.Column>
        <Grid.Column>
          <Image src='/lightbulb.png' aria-label='Lightbulb, It takes 17 muscles to smile, 43 to frown.' style={{ padding: '2em' }} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default LevelFive;