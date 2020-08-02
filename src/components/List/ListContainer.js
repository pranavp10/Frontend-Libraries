/* eslint-disable no-sparse-arrays */
import { Box, Grid, Heading } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const ListContainer = ({ children, heading }) => (
  <Box width={['100%', , '90%', '80%']} mx="auto" mt="2.5rem">
    <Heading
      px="5"
      as="h1"
      my="1rem"
      fontSize={['22px', , , '24px']}
      size="xl"
      fontWeight="bold"
    >
      {heading}
    </Heading>
    <Grid
      width="100%"
      p={0}
      templateColumns="repeat(auto-fill, minmax(290px, 1fr))"
      justifyContent="flex-start"
    >
      {children}
    </Grid>
  </Box>
);
ListContainer.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
};
export default ListContainer;
