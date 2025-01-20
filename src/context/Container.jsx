import { useRef } from 'react';
import { MainContext } from './MainContext';
import PropTypes from 'prop-types';

export default function Container({ children }) {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (currentRef) => {
    currentRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <MainContext.Provider
        value={{ headerRef, projectsRef, aboutRef, contactRef, handleScroll }}
      >
        {children}
      </MainContext.Provider>
    </>
  );
}

Container.propTypes = { children: PropTypes.any };
