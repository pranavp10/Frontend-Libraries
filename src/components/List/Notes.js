import Card from '@/components/Card';
import { NotesData } from '@/data/Notes';
import ListContainer from './ListContainer';

const Notes = () => (
  <ListContainer heading="Note It down">
    {NotesData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default Notes;
