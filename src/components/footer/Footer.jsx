import { FaGithub } from 'react-icons/fa';
import { PiCodepenLogoLight } from 'react-icons/pi';
import './_Footer.scss';

export default function Footer() {
  return (
    <footer>
      <p>&copy; 2025</p>
      <div className="icons-container">
        <a
          href="https://github.com/pozniej-znajde-wolne-haslo"
          target="blank"
          rel="noreferrer"
        >
          <FaGithub className="github" />
        </a>

        <a
          href="https://codepen.io/pozniej-znajde-wolne-haslo"
          target="blank"
          rel="noreferrer"
        >
          <PiCodepenLogoLight className="codepen" />
        </a>
      </div>
    </footer>
  );
}
