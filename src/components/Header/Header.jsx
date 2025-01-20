import { useContext } from 'react';

import './_Header.scss';
import { MainContext } from '../../context/MainContext';

export default function Header() {
  const { headerRef, projectsRef, aboutRef, contactRef, handleScroll } =
    useContext(MainContext);

  return (
    <header ref={headerRef}>
      <div className="logo">
        <span>ania</span>
        <span>rafeld</span>
      </div>
      <nav className="navbar">
        <ul>
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
      </nav>
    </header>
  );
}
