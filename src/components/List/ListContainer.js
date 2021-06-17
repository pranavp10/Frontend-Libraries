/* eslint-disable no-sparse-arrays */
import PropTypes from 'prop-types';

const ListContainer = ({ children, heading }) => (
  <div className="w-full max-w-5xl mx-auto mt-9">
    <div className="p-4 my-4 text-3xl lg:text-4xl font-extrabold">{heading}</div>
    <div className="sm:grid justify-start sm:grid-cols-82 flex flex-col">{children}</div>
  </div>
);
ListContainer.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
};
export default ListContainer;
