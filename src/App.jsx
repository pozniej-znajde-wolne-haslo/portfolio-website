/* import Container from './components/Container/Container';

function App() {
  return (
    <>
      <Container />
    </>
  );
}

export default App; */

import './App.scss';
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
