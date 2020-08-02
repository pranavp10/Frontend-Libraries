import { Stack } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const Container = ({ children, flexDirection }) => (
  <Stack
    as="section"
    spacing={8}
    maxWidth="1000px"
    flexDirection={[flexDirection, flexDirection, 'row', 'row']}
    justifyContent={['center', 'center', 'space-between', 'space-between']}
    alignItems="center"
    width="100%"
    p={8}
    mt={[0, 0, 8]}
    mb={[0, 0, 8]}
    mx="auto"
  >
    {children}
  </Stack>
);
Container.propTypes = {
  children: PropTypes.node,
  flexDirection: PropTypes.string,
};
export default Container;
