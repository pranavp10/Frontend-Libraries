import { Heading, Flex, Box, Image } from '@chakra-ui/core';
import Container from './Container';
import HeroContainer from './HeroContainer';

const Hero = () => (
  <Flex justifyContent="center" flexDirection="column" bg="#d04a49">
    <HeroContainer>
      <Container flexDirection="column">
        <Box>
          <Heading
            letterSpacing="tight"
            mb={4}
            as="h1"
            size="2xl"
            fontWeight="bold"
            color="gray.100"
          >
            Frontend library
          </Heading>
          <Box color="gray.100" mb={4} fontSize="lg">
            These are the frontend library that i have been used till the date
          </Box>
        </Box>
        <Box>
          <Image src="box.svg" alt="Man standing with empty box" />
        </Box>
      </Container>
    </HeroContainer>
  </Flex>
);

export default Hero;
