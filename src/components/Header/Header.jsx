import { useContext, useState } from 'react';
import { MainContext } from '../../context/MainContext';
import { FaBars } from 'react-icons/fa6';
import './_Header.scss';
import Modal from '../modal/Modal';

export default function Header() {
  const { headerRef, projectsRef, aboutRef, contactRef, handleScroll } =
    useContext(MainContext);
  /*  const [isActive, setIsActive] = useState(false); */
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    /* setIsActive(!isActive); */
    setShowModal(!showModal);
  };

  return (
    <header ref={headerRef}>
      <div className="logo">
        <span>ania</span>
        <span>rafeld</span>
      </div>
      <nav className="navbar">
        {/* main menu */}
        <div className="desktop-menu">
          <ul className="desktop-links">
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
        {/* mobile menu */}

        <div className="mobile-menu">
          <div
            className={showModal ? 'hamburger active' : 'hamburger'}
            onClick={toggleModal}
          >
            <FaBars size={27} color={'#dde4dc'} />
          </div>

          <Modal toggleModal={toggleModal} showModal={showModal} />
        </div>
      </nav>
    </header>
  );
}
