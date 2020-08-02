import { Box, Heading, Flex, Link, Image } from '@chakra-ui/core';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import PropTypes from 'prop-types';

const Card = ({ githubLink, website, icon, name, path, color, size }) => {
  if (path) {
    return (
      <Flex wrap="wrap" justify="center">
        <Box
          m={2}
          p={2}
          borderWidth="1px"
          borderColor="gray.300"
          width="100%"
          bg="white"
          borderRadius="sm"
        >
          <Flex alignItems="center">
            <Image src={path} mr={4} size={size} />
            <Flex flexDirection="column">
              <Heading as="h4" size="lg">
                {name}
              </Heading>
              <Flex>
                {githubLink && (
                  <Link
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Box as={AiFillGithub} size="18px" color="gray.900" m={1} />
                  </Link>
                )}
                {website && (
                  <Link
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Box
                      as={FiExternalLink}
                      size="18px"
                      color="gray.900"
                      m={1}
                    />
                  </Link>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    );
  }

  return (
    <Flex wrap="wrap" justify="center">
      <Box
        m={2}
        p={2}
        borderWidth="1px"
        borderColor="gray.300"
        width="100%"
        bg="white"
        borderRadius="sm"
      >
        <Flex alignItems="center">
          <Box as={icon} size={size} color={color} mr={4} />
          <Flex flexDirection="column">
            <Heading as="h4" size="lg">
              {name}
            </Heading>
            <Flex>
              {githubLink && (
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
};
Card.propTypes = {
  githubLink: PropTypes.string,
  name: PropTypes.string,
  website: PropTypes.string,
  icon: PropTypes.node,
  path: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};
export default Card;
