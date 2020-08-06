import { Heading, Stack, Box, Flex } from '@chakra-ui/core';
import CheckMark from './CheckMark';
import Container from './Container';
import SubHeading from './SubHeading';
import SubHeadingText from './SubHeadingText';

const Why = () => (
  <Flex justifyContent="center" flexDirection="column">
    <Container flexDirection="column" justifyContent>
      <Box>
        <Heading as="h1" size="2xl" lineHeight={1} color="gray.900">
          Why This Path?
        </Heading>
        <Box color="gray.700" mb={4} fontSize="lg" maxW={400}>
          The reason i have developed this path is because after lots of
          research and asking all the senior dev and the community based on that
          I have mad this list.
        </Box>
        <Stack mt={[0, 0, 8]} mb={[0, 0, 8]}>
          <CheckMark text="Good Understanding & Used in Production" tried />
          <CheckMark text="Still need to learn & try" />
        </Stack>
      </Box>
    </Container>
  </Flex>
);

export default Why;
