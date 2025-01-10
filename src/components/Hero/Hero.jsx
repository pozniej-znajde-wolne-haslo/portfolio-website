import './_Hero.scss';

export default function Hero() {
  return (
    <>
      <div className="hero-container ">
        <div className="hero-text ">
          <h1>
            <span>Junior</span>
            <span>Web</span>
            <span>Developer</span>
          </h1>

          <button>
            <span>contact</span>
            <span>me</span>
          </button>
        </div>

        <div className="hero-avatar">
          <div className="avatar-container">
            <img src="/Avatar.svg" alt="avatar" />
          </div>
        </div>
      </div>
    </>
  );
}
