import Card from '@/components/Card';
import { FetchersData } from '@/data/Fetchers';
import ListContainer from './ListContainer';

const Fetchers = () => (
  <ListContainer heading="Fetchers">
    {FetchersData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default Fetchers;
