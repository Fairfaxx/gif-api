import PropTypes from 'prop-types';

const GifItem = ({ title, url, id }) => {
  return (
    <div className="card" key={id}>
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </div>
  );
};

export default GifItem;

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
