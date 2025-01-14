import './_Header.scss';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <span>ania</span>
        <span>rafeld</span>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="">projects</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="#contact-form">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
