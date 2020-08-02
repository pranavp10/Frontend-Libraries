import { Link, Box } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const HrefLink = ({ icon, link }) => (
  <Link href={link} target="_blank" rel="noopener noreferrer" color="gray.900">
    <Box as={icon} size="32px" color="blue.400" m={2} />
  </Link>
);
HrefLink.propTypes = {
  icon: PropTypes.any,
  link: PropTypes.string,
};
export default HrefLink;
