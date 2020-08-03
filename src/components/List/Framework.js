import Card from '../Card';
import ListContainer from './ListContainer';
import { FrameworkData } from '../../json/Framework';

const Framework = () => (
  <ListContainer heading="Framework">
    {FrameworkData.map(data => (
      <Card {...data} />
    ))}
  </ListContainer>
);

export default Framework;
