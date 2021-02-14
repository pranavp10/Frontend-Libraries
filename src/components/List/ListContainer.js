/* eslint-disable no-sparse-arrays */
import PropTypes from 'prop-types';

const ListContainer = ({ children, heading }) => (
  <div className="w-full mx-auto mt-9">
    <h6 className="p-4 my-4 text-xl sm:text-3xl font-bold">{heading}</h6>
    <div className="grid justify-start grid-cols-82">{children}</div>
  </div>
);
ListContainer.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
};
export default ListContainer;
