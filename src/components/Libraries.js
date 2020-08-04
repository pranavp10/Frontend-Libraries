import { Flex } from '@chakra-ui/core';
import {
  Framework,
  UiLibrary,
  CssInJs,
  StateManagement,
  ReactDataFetching,
  Fetchers,
} from './List';

const Libraries = () => (
  <Flex bg="#eeeef2" wrap="true" direction="column">
    <Framework />
    <Fetchers />
    <StateManagement />
    <ReactDataFetching />
    <CssInJs />
    <UiLibrary />
  </Flex>
);
export default Libraries;
