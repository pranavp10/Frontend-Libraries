import { Box, Heading, Flex, Link, Avatar } from '@chakra-ui/core';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

const Card = ({ githubLink, website, name, path, tried }) => (
  <Flex wrap="wrap" justify="center">
    <Box
      m={2}
      p={2}
      borderWidth="1px"
      borderColor="gray.300"
      width={['100%', '100%', '100%', '100%']}
      bg="white"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Flex alignItems="center">
        <Avatar
          name={name}
          src={path}
          mr={4}
          bg={path ? 'white' : 'black'}
          color={path ? 'black' : 'white'}
        />
        <Flex flexDirection="column">
          <Heading as="h4" size="lg">
            {name}{' '}
            {tried ? (
              <Box
                display="inline"
                as={FaCheckCircle}
                size="15px"
                color="green.400"
              />
            ) : (
              <Box display="inline" as={MdCancel} size="18px" color="red.500" />
            )}
          </Heading>
          <Flex>
            {githubLink && (
              <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                <Box as={AiFillGithub} size="18px" color="gray.900" m={1} />
              </Link>
            )}
            {website && (
              <Link href={website} target="_blank" rel="noopener noreferrer">
                <Box as={FiExternalLink} size="18px" color="gray.900" m={1} />
              </Link>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  </Flex>
);
Card.propTypes = {
  githubLink: PropTypes.string,
  name: PropTypes.string,
  website: PropTypes.string,
  path: PropTypes.string,
  tried: PropTypes.bool,
};
export default Card;
