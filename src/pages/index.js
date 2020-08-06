/* eslint-disable no-sparse-arrays */
import { Box, Flex } from '@chakra-ui/core';
import {
  Hero,
  Footer,
  NewsLetter,
  Who,
  Libraries,
  SEO,
  Why,
} from '../components';

const Index = () => (
  <>
    <SEO />
    <Box as="main">
      <Hero />
      <Why />
      <Libraries />
      <Who />
      <Flex justifyContent="center" flexDirection="column">
        <NewsLetter />
        <Footer />
      </Flex>
    </Box>
  </>
);

export default Index;
