import Card from '@/components/Card';
import { UtilityData } from '@/data/utility';
import ListContainer from './ListContainer';

const Notes = () => (
  <ListContainer heading="Utility">
    {UtilityData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default Notes;
