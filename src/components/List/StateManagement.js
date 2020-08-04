import Card from '../Card';
import ListContainer from './ListContainer';
import { StateManagementData } from '../../json/StateManagement';

const StateManagement = () => (
  <ListContainer heading="State Management">
    {StateManagementData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default StateManagement;
