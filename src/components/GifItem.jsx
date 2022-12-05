const GifItem = ({ title, url, id }) => {
  return (
    <div className="card" key={id}>
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </div>
  );
};

export default GifItem;
