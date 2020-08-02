/* eslint-disable no-sparse-arrays */
import { Box, Flex } from '@chakra-ui/core';
import { Hero, Footer, NewsLetter, Who, Libraries } from '../components';

const Index = () => (
  <Box as="main">
    <Hero />
    <Libraries />
    <Who />
    <Flex justifyContent="center" flexDirection="column">
      <NewsLetter />
      <Footer />
    </Flex>
  </Box>
);

export default Index;
