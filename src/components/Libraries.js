import { Flex } from '@chakra-ui/core';
import { Framework, UiLibrary, CssInJs } from './List';

const Libraries = () => (
  <Flex bg="#eeeef2" wrap="true" direction="column">
    <Framework />
    <UiLibrary />
    <CssInJs />
  </Flex>
);
export default Libraries;
