import { Stack, Box, Heading } from '@chakra-ui/core';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

const CheckMark = ({ text, tried }) => (
  <Stack isInline mb={2}>
    <Box
      as={tried ? FaCheckCircle : MdCancel}
      size={tried ? '24px' : '28px'}
      color={tried ? 'green.400' : 'red.500'}
      mr={0}
    />
    <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
      {text}
    </Heading>
  </Stack>
);
CheckMark.propTypes = {
  text: PropTypes.string,
  tried: PropTypes.bool,
};
export default CheckMark;
