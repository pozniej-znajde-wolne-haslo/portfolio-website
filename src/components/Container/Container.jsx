import Header from '../Header/Header';
import './_Container.scss';

export default function Container() {
  return (
    <div className="container">
      <div className="container-layer">
        <Header />
      </div>
    </div>
  );
}
