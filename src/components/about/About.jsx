import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import './_About.scss';

export default function About() {
  const { aboutRef } = useContext(MainContext);

  return (
    <div className="about-container" ref={aboutRef}>
      <h2>about</h2>
      <div className="about-content">
        <p>
          I&apos;m a Junior Web Developer passionate about crafting fully
          responsive user interfaces, whether translating professional desings
          into code or creating my own ones. I always seek new challenges and
          never stop learning and improving my skills.
        </p>

        <h4>technical</h4>
        <p>
          Frontend programming with HTML, CSS, Sass, JavaScript and React.js, is
          where I feel most comfortable at the moment. My backend toolbox to
          come up with a complete MERN stack includes Node.js, Express.js and
          MondoDB.
        </p>

        <div className="icons-container ">
          <img src="./tech-icons/html.svg" alt="html" />
          <img src="./tech-icons/css.svg" alt="css" />
          <img src="./tech-icons/sass.svg" alt="sass" />
          <img src="./tech-icons/javascript1.svg" alt="javascript" />
          <img src="./tech-icons/react.svg" alt="react" />
        </div>

        <div className="icons-container">
          <img src="./tech-icons/nodejs.svg" alt="nodeJS" />
          <img src="./tech-icons/express.svg" alt="express" />
          <img src="./tech-icons/mongodb.png" alt="mongoDB" />
        </div>

        <p>
          I&apos;m currently learning Typescript and Next.js, and expanding my
          know-how around Figma.
        </p>

        <div className="icons-container">
          <img src="./tech-icons/typescript.svg" alt="typescript" />
          <img src="./tech-icons/nextjs.svg" alt="nextjs" />
          <img src="./tech-icons/figma.svg" alt="figma" />
        </div>

        <h4>personal</h4>
        <p>
          I grew up in Poland, but moved to Germany many years ago. Since a very
          young age, I&apos;ve been interested in languages and linguistics,
          which led me to study English Philology and later on to programming.
          Dancing and climbing are my places to go in the spare time.
        </p>
      </div>
    </div>
  );
}
