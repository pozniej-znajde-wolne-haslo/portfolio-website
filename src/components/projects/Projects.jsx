import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import ProjectCard from '../projectCard/ProjectCard';
import './_Projects.scss';

export default function Projects() {
  const { projectsRef } = useContext(MainContext);

  return (
    <div className="projects-container" ref={projectsRef}>
      <h2>projects</h2>

      <div className="projects">
        <ProjectCard
          url="https://booksy-store.onrender.com"
          img="./projects-img/booksy.png"
          title="Booksy"
          repo="https://github.com/pozniej-znajde-wolne-haslo/bookstore_front_and_back"
        >
          An online bookstore. This work was a final project for the
          web-development training at DCI. It&apos;s built with MERN-Stack.
        </ProjectCard>

        <ProjectCard
          url="https://github.com/WoerterWald/woerter_wald"
          img="./projects-img/woerterWald.png"
          title="WörterWald"
          repo="https://github.com/WoerterWald/woerter_wald"
        >
          This project is a Spelling Bee clone and a collaboration. It&apos;s
          built with Next.js and TypeScript.
        </ProjectCard>

        <ProjectCard
          url="https://github.com/pozniej-znajde-wolne-haslo/js_kalorien-rechner"
          img="./projects-img/kcal.png"
          title="Mehrwertsteuer-Rechner"
          pen="https://codepen.io/pozniej-znajde-wolne-haslo/pen/emOPGLO"
        >
          A tool to calculate your recommended kcal-intake depending on your
          average physical activity. It uses Vanilla JavaScript and Sass.
        </ProjectCard>

        <ProjectCard
          url="https://github.com/pozniej-znajde-wolne-haslo/MwSt.-Rechner_Tailwind"
          img="./projects-img/vat.png"
          title="Mehrwertsteuer-Rechner"
          pen="https://codepen.io/pozniej-znajde-wolne-haslo/pen/BaeZOQL"
        >
          This VAT calculator uses JavaScript to make your life easier
        </ProjectCard>
      </div>
    </div>
  );
}
