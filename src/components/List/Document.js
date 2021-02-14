import Card from '@/components/Card';
import { DocumentationData } from '@/data/Document';
import ListContainer from './ListContainer';

const Documentation = () => (
  <ListContainer heading="Document Each Component">
    {DocumentationData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default Documentation;
