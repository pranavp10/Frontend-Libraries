import Card from '../Card';
import ListContainer from './ListContainer';
import { UiLibraryData } from '../../json/ui-library';

const UiLibrary = () => (
  <ListContainer heading="UI Library">
    {UiLibraryData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default UiLibrary;
