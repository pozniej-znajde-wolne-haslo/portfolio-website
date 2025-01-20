import { useContext } from 'react';
import './_About.scss';
import { MainContext } from '../../context/MainContext';

export default function About() {
  const { aboutRef } = useContext(MainContext);

  return (
    <div className="about-container" ref={aboutRef}>
      <h2>about</h2>

      <p>
        I enjoy giving 100% to create appealing designs and translate them to be
        fully responsive and to look amazing on every device. I always seek new
        challenges and never stop learning and improving my skills.
      </p>

      <h4>skills</h4>
      <p>
        I feel most comfortable being around HTML, CSS, Sass and Javascript.
        Currently I am learning React.js and looking forward to extend my skills
        towards the backend (dark) side. For that I&apos;ve got Node.js,
        Express.js and MongoDB on my list, to eventually build a complete MERN
        stack.
      </p>

      <div className="icons-container">
        <img src="./html.svg" alt="html" />
        <img src="./css.svg" alt="css" />
        <img src="./sass.svg" alt="sass" />
        <img src="./javascript.svg" alt="javascript" />
        <img src="./react.svg" alt="react" />
      </div>

      <div className="icons-container">
        <img src="./nodejs.svg" alt="nodeJS" />
        <img src="./express.svg" alt="express" />
        <img src="./mongodb.png" alt="mongoDB" />
      </div>

      <p>
        currently I&apos;m learning Typescript and Next.js, and expanding my
        know-how around Figma.
      </p>

      <div className="icons-container">
        <img src="./typescript.svg" alt="typescript" />
        <img src="./nextjs.svg" alt="nextjs" />
        <img src="./figma.svg" alt="figma" />
      </div>

      <h4>personal</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
        reiciendis iure, consequatur ab assumenda fugiat repellat quae
        doloremque odio autem quam aperiam asperiores placeat ipsa nemo earum
        voluptate necessitatibus tenetur facere eum quisquam sed? Sint deserunt,
        suscipit quaerat error aut esse blanditiis labore. Enim cumque quidem
        asperiores magnam ullam, atque quo, laboriosam voluptatem labore totam,
      </p>
    </div>
  );
}
