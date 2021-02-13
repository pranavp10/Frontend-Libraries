import React from 'react';
import { FaBoxOpen } from 'react-icons/fa';
import PropTypes from 'prop-types';

const HeroContainer = ({ children }) => (
  <>
    <div className="bg-red-900">
      <nav className="flex flex-row max-w-5xl justify-between items-center p-8 mx-auto sm:my-8">
        <div className="text-white">
          <FaBoxOpen size="42px" />
        </div>
        <div className="text-white">
          <FaBoxOpen size="42px" />
        </div>
      </nav>
    </div>
    {children}
  </>
);
HeroContainer.propTypes = {
  children: PropTypes.node,
};
export default HeroContainer;
