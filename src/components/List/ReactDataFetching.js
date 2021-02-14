import Card from '@/components/Card';
import { ReactDataFetchingData } from '@/data/ReactDataFetching';
import ListContainer from './ListContainer';

const ReactDataFetching = () => (
  <ListContainer heading="Data Fetching Hooks">
    {ReactDataFetchingData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default ReactDataFetching;
