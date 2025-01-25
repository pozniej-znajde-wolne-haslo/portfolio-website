import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import './_Modal.scss';

export default function Modal() {
  const {
    headerRef,
    projectsRef,
    aboutRef,
    contactRef,
    handleScroll,
    showModal,
    toggleModal,
  } = useContext(MainContext);

  return (
    <div className={showModal ? 'modal active' : 'modal'}>
      <p className="closeBtn" onClick={toggleModal}>
        &times;
      </p>

      <ul className="mobile-links" onClick={toggleModal}>
        <li>
          <a onClick={() => handleScroll(headerRef)}>home</a>
        </li>
        <li>
          <a onClick={() => handleScroll(projectsRef)}>projects</a>
        </li>
        <li>
          <a onClick={() => handleScroll(aboutRef)}>about</a>
        </li>
        <li>
          <a onClick={() => handleScroll(contactRef)}>contact</a>
        </li>
      </ul>
    </div>
  );
}
