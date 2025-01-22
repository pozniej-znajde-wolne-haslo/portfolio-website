import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import './_Projects.scss';

export default function Projects() {
  const { projectsRef } = useContext(MainContext);

  return (
    <div className="projects-container" ref={projectsRef}>
      <h2>projects</h2>

      <div className="projects">
        <div className="project ">
          <a
            href="https://booksy-store.onrender.com"
            target="blank"
            rel="noreferrer"
            className="project-img booksy"
          />

          <div className="project-description">
            <h3>Booksy</h3>
            <p>
              An online bookstore. This work was a final project for the
              web-development training at DCI. It&apos;s built with MERN-Stack.
            </p>
            <a
              href="https://github.com/pozniej-znajde-wolne-haslo/bookstore_front_and_back"
              target="blank"
              rel="noreferrer"
            >
              See the repository
            </a>
          </div>
        </div>

        <div className="project ">
          <a className="project-img woerterWald" />

          <div className="project-description">
            <h3>WörterWald</h3>
            <p>
              This project is a Spelling Bee clone and a collaboration.
              It&apos;s built with Next.js and TypeScript.
            </p>
            <a
              href="https://github.com/WoerterWald/woerter_wald"
              target="blank"
              rel="noreferrer"
            >
              See the repository
            </a>
          </div>
        </div>

        <div className="project ">
          <a className="project-img calculator" />

          <div className="project-description">
            <h3>Mehrwertsteuer-Rechner</h3>
            <p>This VAT calculator uses JavaScript to make your life easier</p>
            <a
              href="https://github.com/WoerterWald/woerter_wald"
              target="blank"
              rel="noreferrer"
            >
              Go to Codepen
            </a>
          </div>
        </div>

        <div className="project ">
          <a className="project-img calculator" />

          <div className="project-description">
            <h3>Mehrwertsteuer-Rechner</h3>
            <p>This VAT calculator uses JavaScript to make your life easier</p>
            <a
              href="https://github.com/WoerterWald/woerter_wald"
              target="blank"
              rel="noreferrer"
            >
              Go to Codepen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
