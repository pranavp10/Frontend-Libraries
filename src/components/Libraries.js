import { Flex } from '@chakra-ui/core';
import {
  Framework,
  UiLibrary,
  CssInJs,
  StateManagement,
  ReactDataFetching,
} from './List';

const Libraries = () => (
  <Flex bg="#eeeef2" wrap="true" direction="column">
    <Framework />
    <StateManagement />
    <ReactDataFetching />
    <CssInJs />
    <UiLibrary />
  </Flex>
);
export default Libraries;
