import {
  Heading,
  Box,
  Avatar,
  Text,
  Flex,
  Link,
  Button,
} from '@chakra-ui/core';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import Container from './Container';
import HrefIconLink from './hrefIconLink';

const Who = () => (
  <Flex flexDirection="column" bg="#FBFBFB">
    <Container flexDirection="column">
      <Box>
        <Heading as="h1" size="2xl" lineHeight={1} color="gray.900" mb={5}>
          New npm
          <br />
          packages ?
        </Heading>
        <Box color="gray.700" mb={4} fontSize="lg" maxW={400}>
          I will always starving for trying new npm packages so that I can
          implement in the up coming projects and will you know one? Will try
          and add it to the list
        </Box>
        <Box textAlign={['center', 'center', 'left', 'left']}>
          <Link href="mailto:pranavkp.me@outlook.com?subject=libraries.now.sh&body=package%20name%3A-%0D%0Agithub%20link%3A-%0D%0Awebsite%3A-">
            <Button leftIcon="email" variantColor="red" variant="solid">
              Email Me
            </Button>
          </Link>
        </Box>
      </Box>
      <Box textAlign="center">
        <Box>
          <Avatar size="xl" name="Pranav Patel" src="author.jpeg" m={5} />
          <Text>Meet The Author</Text>
        </Box>
        <Heading color="gray.900">Pranav Patel</Heading>
        <Text color="gray.500" mb={5}>
          Software Engineer
        </Text>
        <Text color="gray.500" mb={5} maxW={300}>
          JavaScript, React, Design Systems, a software engineer by passion,
          loves solving problems. Most loved thing in js is the closer property,
          figuring out life's purpose.
        </Text>
        <Flex justifyContent="center">
          <HrefIconLink
            icon={AiFillLinkedin}
            link="https://www.linkedin.com/in/pranav-p-241914183"
          />
          <HrefIconLink
            icon={AiOutlineTwitter}
            link="https://twitter.com/thatspranav"
          />
        </Flex>
      </Box>
    </Container>
  </Flex>
);
export default Who;
