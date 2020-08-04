import Card from '../Card';
import ListContainer from './ListContainer';
import { FrameworkData } from '../../json/Framework';

const Framework = () => (
  <ListContainer heading="Framework">
    {FrameworkData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default Framework;
