import Card from '../Card';
import ListContainer from './ListContainer';
import { ReactDataFetchingData } from '../../json/ReactDataFetching';

const ReactDataFetching = () => (
  <ListContainer heading="Data Fetching Hooks">
    {ReactDataFetchingData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default ReactDataFetching;
