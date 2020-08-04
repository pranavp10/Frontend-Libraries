import Card from '../Card';
import ListContainer from './ListContainer';
import { FetchersData } from '../../json/Fetchers';

const Fetchers = () => (
  <ListContainer heading="Fetchers">
    {FetchersData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default Fetchers;
