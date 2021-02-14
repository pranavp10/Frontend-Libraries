import React from 'react';
import { FaBoxOpen } from 'react-icons/fa';
import PropTypes from 'prop-types';
import DarkModeSwitch from './darkModeSwitch';

const HeroContainer = ({ children }) => (
  <>
    <div className="">
      <nav className="flex flex-row max-w-5xl justify-between items-center p-8 mx-auto lg:my-8">
        <div className="text-red-500">
          <FaBoxOpen size="42px" />
        </div>
        <div>
          <DarkModeSwitch />
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
