import PropTypes from 'prop-types';
import './_ProjectCard.scss';

export default function ProjectCard({ url, img, title, children, repo, pen }) {
  return (
    <div className="card-container">
      <div className="img-container">
        <a href={url} target="blank" rel="noreferrer">
          <img src={img} alt="" />
        </a>
      </div>

      <div className="card-description">
        <h3>{title}</h3>
        <p>{children}</p>

        {repo && (
          <a href={repo} target="blank" rel="noreferrer" className="link">
            See the repository
          </a>
        )}

        {pen && (
          <a href={pen} target="blank" rel="noreferrer" className="link">
            Go to Codepen
          </a>
        )}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  url: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.string,
  repo: PropTypes.string,
  pen: PropTypes.string,
};
