import './App.scss';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import SectionSeparator from './components/sectionSeparator/SectionSeparator';

function App() {
  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <Header />
        <Hero />
        <SectionSeparator />
        <Projects />
        <SectionSeparator />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
