import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';

import Projects from './components/projects/Projects.jsx';
import SectionSeparator from './components/sectionSeparator/SectionSeparator.jsx';
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <SectionSeparator />
        <Projects />
        <SectionSeparator />
        <About />
        <SectionSeparator />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
