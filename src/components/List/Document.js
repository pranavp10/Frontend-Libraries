import ListContainer from './ListContainer';
import Card from '../Card';
import { DocumentationData } from '../../json/Document';

const Documentation = () => (
  <ListContainer heading="Document Each Component">
    {DocumentationData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default Documentation;
