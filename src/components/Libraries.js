import { Flex, Tag, Heading } from '@chakra-ui/core';
import {
  Framework,
  UiLibrary,
  CssInJs,
  StateManagement,
  ReactDataFetching,
  Fetchers,
  Document,
  Notes,
} from './List';

const Libraries = () => (
  <Flex bg="#eeeef2" wrap="true" direction="column" p={5}>
    <Framework />
    <Fetchers />
    <StateManagement />
    <ReactDataFetching />
    <CssInJs />
    <UiLibrary />
    <Document />
    <Notes />
  </Flex>
);
export default Libraries;
