import Header from '../Header/Header';
import Hero from '../Hero/Hero';

import './_Container.scss';
import { useRef } from 'react';

export default function Container() {
  const containerElement = useRef();

  return (
    <div className="container" ref={containerElement}>
      <div className="container-layer">
        <Header />
        <Hero />
      </div>
    </div>
  );
}
