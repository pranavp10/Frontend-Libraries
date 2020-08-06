import { Box } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const SubHeadingText = ({ children }) => (
  <Box color="gray.700" mb={4} fontSize="lg" maxW={400}>
    {children}
  </Box>
);
SubHeadingText.propTypes = {
  children: PropTypes.node,
};

export default SubHeadingText;
