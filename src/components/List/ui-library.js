/* eslint-disable no-sparse-arrays */
import Card from '../Card';
import ListContainer from './ListContainer';
import { UiLibraryData } from '../../json/ui-library';

const UiLibrary = () => (
  <ListContainer heading="UI Library">
    {UiLibraryData.map(data => (
      <Card {...data} />
    ))}
  </ListContainer>
);

export default UiLibrary;
