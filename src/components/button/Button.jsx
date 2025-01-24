import { useContext } from 'react';
import PropTypes from 'prop-types';
import { MainContext } from '../../context/MainContext';
import './_Button.scss';

export default function Button({ type, style }) {
  const { contactRef, handleScroll } = useContext(MainContext);

  return (
    <>
      {type ? (
        <button className={style} type={type}>
          <span>contact</span>
          <span>me</span>
        </button>
      ) : (
        <button className={style} onClick={() => handleScroll(contactRef)}>
          <span>contact</span>
          <span>me</span>
        </button>
      )}
    </>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  style: PropTypes.string,
};
