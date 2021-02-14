import Card from '@/components/Card';
import { StateManagementData } from '@/data/StateManagement';
import ListContainer from './ListContainer';

const StateManagement = () => (
  <ListContainer heading="State Management">
    {StateManagementData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default StateManagement;
