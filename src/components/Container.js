import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <section className="flex max-w-5xl justify-center w-full items-center p-8 mx-auto lg:my-8 flex-col lg:flex-row lg:justify-between">
    {children}
  </section>
);
Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
