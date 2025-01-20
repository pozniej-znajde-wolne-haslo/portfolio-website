import { useContext } from 'react';
import './_Projects.scss';
import { MainContext } from '../../context/MainContext';

export default function Projects() {
  const { projectsRef } = useContext(MainContext);

  return (
    <div className="projects-container" ref={projectsRef}>
      <h2>projects</h2>

      <div className="projects">
        <div className="project ">
          <div className="project-img booksy"></div>

          <div className="project-description">
            <h3>Booksy</h3>
            <p>
              <span>Booksy</span> is an online bookstore. This work was a final
              project for the web-development training at DCI. It&apos;s built
              with MERN-Stack.
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
          <div className="project-img woerterWald"></div>

          <div className="project-description">
            <h3>WörterWald</h3>
            <p>
              <span>WörterWald</span> is a fun word game, where you are
              challneged to find as many words as possible. This project is a
              collaboration with Max Sommerfeld. It&apos;s built with Next.js
              and TypeScript.
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
          <div className="project-img calculator"></div>

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
          <div className="project-img calculator"></div>

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
