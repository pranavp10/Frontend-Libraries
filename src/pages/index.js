import { Box, Flex } from '@chakra-ui/core';
import { Hero, Footer, NewsLetter } from '../components';

const Index = () => (
  <Box as="main">
    <Hero />
    <Flex justifyContent="center" flexDirection="column">
      <NewsLetter />
      <Footer />
    </Flex>
  </Box>
);

export default Index;
