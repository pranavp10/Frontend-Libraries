import { Box, Flex } from '@chakra-ui/core';
import { Hero, Footer, NewsLetter, Who } from '../components';

const Index = () => (
  <Box as="main">
    <Hero />
    <Who />
    <Flex justifyContent="center" flexDirection="column">
      <NewsLetter />
      <Footer />
    </Flex>
  </Box>
);

export default Index;
