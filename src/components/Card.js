import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

const Card = ({ githubLink, website, name, path, tried }) => (
  <div className="flex flex-wrap justify-center w-full">
    <div className="m-2 p-2 border border-white rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out cursor-pointer transform hover:scale-105 motion-reduce:transform-none w-full">
      <div className="items-center flex space-x-4">
        <Image className="rounded-full hover:p-2" src={`/${path}`} width={100} height={100} />
        <div className="flex flex-col space-y-1">
          <div className="flex justify-center items-center space-x-3">
            <p className="lg:text-3xl text-base font-extrabold">{name}</p>
            <div>
              {tried ? (
                <div className="text-green-500 dark:text-green-400">
                  <FaCheckCircle size="14px" />
                </div>
              ) : (
                <div className="text-red-500 dark:text-red-400">
                  <MdCancel size="16px" />
                </div>
              )}
            </div>
          </div>
          <div className="flex space-x-2">
            {githubLink && (
              <a
                href={githubLink}
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer">
                <span className="sr-only">github link</span>
                <AiFillGithub size="20px" />
              </a>
            )}
            {website && (
              <a
                href={website}
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer">
                <span className="sr-only">website link</span>
                <FiExternalLink size="20px" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
Card.propTypes = {
  githubLink: PropTypes.string,
  name: PropTypes.string,
  website: PropTypes.string,
  path: PropTypes.string,
  tried: PropTypes.bool,
};
export default Card;
