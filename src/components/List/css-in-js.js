import Card from '@/components/Card';
import { CssInJsData } from '@/data/css-in-js';
import ListContainer from './ListContainer';

const CssInJs = () => (
  <ListContainer heading="CSS in JS">
    {CssInJsData.map((data, index) => (
      <Card {...data} key={index} />
    ))}
  </ListContainer>
);

export default CssInJs;
