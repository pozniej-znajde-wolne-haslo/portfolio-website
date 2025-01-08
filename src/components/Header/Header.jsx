import './_Header.scss';

export default function Header() {
  return (
    <header>
      <div className="logo">Ania Rafeld</div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="">works</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
