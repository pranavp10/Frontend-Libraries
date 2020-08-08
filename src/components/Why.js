import { Heading, Stack, Box, Flex, List, ListItem } from '@chakra-ui/core';
import CheckMark from './CheckMark';
import Container from './Container';

const Why = () => (
  <Flex justifyContent="center" flexDirection="column">
    <Container flexDirection="column" justifyContent>
      <Box>
        <Heading as="h1" size="2xl" lineHeight={1} color="gray.900" mb={5}>
          Why These Packages?
        </Heading>
        <Box color="gray.700" mb={4} fontSize="lg">
          <List styleType="decimal">
            <ListItem>
              These Packages are one of the most used packages in production.
              The reason I've created and shared this list is because I wanted
              to make it easy for everyone.
            </ListItem>
            <ListItem>
              When I was searching for these, I was unable to find all the
              packages at one place. That sparked a thought in me "Why not
              create site where everything can be found in a single place? "
              Awesome right? So this is where that thought landed.
            </ListItem>
          </List>
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
