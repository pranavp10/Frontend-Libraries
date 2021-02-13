import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <section className=" flex flex-row max-w-5xl justify-center w-full items-center p-8 mx-auto sm:my-8 flex-col sm:flex-row sm:justify-between">
    {children}
  </section>
);
Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
