import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import PropTypes from 'prop-types';
import './_modal.scss';

export default function Modal({ toggleModal, isActive }) {
  const { headerRef, projectsRef, aboutRef, contactRef, handleScroll } =
    useContext(MainContext);

  return (
    <div className={isActive ? 'modal active' : 'modal'}>
      <p className="closeBtn" onClick={toggleModal}>
        &times;
      </p>

      <ul className="mobile-links" onClick={toggleModal}>
        <li>
          <a
            onClick={() => {
              handleScroll(headerRef);
            }}
          ></a>
          home
        </li>
        <li>
          <a
            onClick={() => {
              handleScroll(projectsRef);
            }}
          ></a>
          projects
        </li>
        <li>
          <a onClick={() => handleScroll(aboutRef)}></a>about
        </li>
        <li>
          <a onClick={() => handleScroll(contactRef)}></a>contact
        </li>
      </ul>
    </div>
  );
}

Modal.propTypes = {
  toggleModal: PropTypes.func,
  isActive: PropTypes.bool,
};
