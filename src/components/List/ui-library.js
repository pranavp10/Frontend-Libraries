import Card from '@/components/Card';
import { UiLibraryData } from '@/data/ui-library';
import ListContainer from './ListContainer';

const UiLibrary = () => (
  <ListContainer heading="UI Library">
    {UiLibraryData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default UiLibrary;
