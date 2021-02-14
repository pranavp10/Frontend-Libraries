import PropTypes from 'prop-types';
import { MdCancel, MdCheckCircle } from 'react-icons/md';

const CheckMark = ({ text, tried }) => (
  <div className="flex items-center space-x-2 mb-2">
    <div className={`${tried ? 'text-green-500' : 'text-red-500'}`}>
      {tried ? <MdCheckCircle size="18px" /> : <MdCancel size="19px" />}
    </div>

    <div className="font-extrabold text-lg">{text}</div>
  </div>
);
CheckMark.propTypes = {
  text: PropTypes.string,
  tried: PropTypes.bool,
};
export default CheckMark;
