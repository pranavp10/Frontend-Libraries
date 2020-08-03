import { Flex } from '@chakra-ui/core';
import { Framework, UiLibrary } from './List';

const Libraries = () => (
  <Flex bg="#eeeef2" wrap="true" direction="column">
    <Framework />
    <UiLibrary />
  </Flex>
);
export default Libraries;
