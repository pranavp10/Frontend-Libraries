import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

const Card = ({ githubLink, website, name, path, tried }) => (
  <div className="flex flex-wrap justify-center">
    <div className="m-2 p-2 border w-full rounded-lg shadow-sm">
      <div className="items-center">
        <Image className="rounded-full" src={`/${path}`} width={24} height={24} />
        <div className="flex flex-col">
          <h4>
            {name} {tried ? <FaCheckCircle size="24px" /> : <MdCancel size="24px" />}
          </h4>
          <div className="flex">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <AiFillGithub size="18px" />
              </a>
            )}
            {website && (
              <a href={website} target="_blank" rel="noopener noreferrer">
                <FiExternalLink size="18px" />
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
