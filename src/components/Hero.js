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
            Frontend Libraries
          </Heading>
          <Box color="gray.100" mb={4} fontSize="lg" maxW={300}>
            Best Frontend Libraries which has been used by folks working at
            facebook,Google,Microsoft and may more.
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
