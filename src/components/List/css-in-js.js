import Card from '../Card';
import ListContainer from './ListContainer';
import { CssInJsData } from '../../json/css-in-js';

const CssInJs = () => (
  <ListContainer heading="CSS in JS">
    {CssInJsData.map(data => (
      <Card {...data} />
    ))}
  </ListContainer>
);

export default CssInJs;
