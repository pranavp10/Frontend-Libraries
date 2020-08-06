import ListContainer from './ListContainer';
import Card from '../Card';
import { NotesData } from '../../json/Notes';

const Notes = () => (
  <ListContainer heading="Note It down">
    {NotesData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default Notes;
