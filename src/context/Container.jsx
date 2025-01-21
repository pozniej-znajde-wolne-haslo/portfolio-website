import { useRef, useState } from 'react';
import { MainContext } from './MainContext';
import PropTypes from 'prop-types';

export default function Container({ children }) {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const handleScroll = (currentRef) => {
    currentRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <MainContext.Provider
        value={{
          headerRef,
          projectsRef,
          aboutRef,
          contactRef,
          handleScroll,
          showModal,
          setShowModal,
          toggleModal,
        }}
      >
        {children}
      </MainContext.Provider>
    </>
  );
}

Container.propTypes = { children: PropTypes.any };
