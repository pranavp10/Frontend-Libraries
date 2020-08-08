import { Heading, Stack, Box, Flex } from '@chakra-ui/core';
import CheckMark from './CheckMark';
import Container from './Container';

const Why = () => (
  <Flex justifyContent="center" flexDirection="column">
    <Container flexDirection="column" justifyContent>
      <Box>
        <Heading as="h1" size="2xl" lineHeight={1} color="gray.900">
          Why This Packages?
        </Heading>
        <Box color="gray.700" mb={4} fontSize="lg" maxW={400}>
          These Packages are the one of most Used in the Production, the reason
          we have is created this list is I wanted to share is because when i
          was searching I was unable to find all the Packages at one place so I
          got the thought and created it
        </Box>
        <Stack mt={[0, 0, 8]} mb={[0, 0, 8]}>
          <CheckMark text="Used in Production" tried />
          <CheckMark text="Still need to learn & try" />
        </Stack>
      </Box>
    </Container>
  </Flex>
);

export default Why;
