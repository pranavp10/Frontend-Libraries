import Card from '@/components/Card';
import { FrameworkData } from '@/data/Framework';
import ListContainer from './ListContainer';

const Framework = () => (
  <ListContainer heading="Framework">
    {FrameworkData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default Framework;
