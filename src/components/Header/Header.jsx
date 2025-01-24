import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { FaBars } from 'react-icons/fa6';
import Modal from '../modal/Modal';
import './_Header.scss';

export default function Header() {
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
    <header ref={headerRef}>
      <div className="logo">
        <span>ania</span>
        <span>rafeld</span>
      </div>
      <nav className="navbar">
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

        <div className="mobile-menu">
          <div
            className={showModal ? 'hamburger active' : 'hamburger'}
            onClick={toggleModal}
          >
            <FaBars size={27} color={'#dde4dc'} />
          </div>

          <Modal />
        </div>
      </nav>
    </header>
  );
}
