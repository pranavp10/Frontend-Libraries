/* eslint-disable no-sparse-arrays */
import { DiReact } from 'react-icons/di';
import { GrGatsbyjs } from 'react-icons/gr';
import Card from '../Card';
import ListContainer from './ListContainer';

const Framework = () => (
  <ListContainer heading="Framework">
    <Card
      githubLink="https://github.com/facebook/react/"
      website="https://reactjs.org/"
      name="React"
      icon={DiReact}
      color="#34d7f8"
      size="62px"
    />
    <Card
      githubLink="https://github.com/gatsbyjs/gatsby"
      website="https://www.gatsbyjs.org/"
      name="Gatsby"
      icon={GrGatsbyjs}
      color="#542c85"
      size="62px"
    />
    <Card
      githubLink="https://github.com/vercel/next.js"
      website="https://nextjs.org/"
      name="Next"
      path="icons/nextjs.svg"
      size="62px"
    />
  </ListContainer>
);

export default Framework;
