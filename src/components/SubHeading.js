import { Heading } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const SubHeading = ({ text }) => (
  <Heading size="xl" fontWeight="extrabold" color="gray.900">
    {text}
  </Heading>
);
SubHeading.propTypes = {
  text: PropTypes.string,
};

export default SubHeading;
