import { Stack, Text, Link, Box } from '@chakra-ui/core';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => (
  <Stack
    as="section"
    spacing={8}
    maxWidth="650px"
    flexDirection="row"
    justifyContent="space-between"
    width="100%"
    mb={[0, 0, 8]}
    pl={[8, 8, 0, 0]}
    pr={[8, 8, 0, 0]}
    mx="auto"
  >
    <Text color="gray.900">
      <b>No &copy; copyright issues</b>
    </Text>
    <Stack isInline>
      <Link
        href="https://github.com/pranavp10/libraries.now.sh"
        target="_blank"
        color="gray.900"
        rel="noopener noreferrer"
      >
        <Box as={AiFillGithub} size="24px" color="gray.900" />
      </Link>
    </Stack>
  </Stack>
);

export default Footer;
