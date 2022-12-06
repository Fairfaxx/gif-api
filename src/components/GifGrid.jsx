import { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifItem from './GifItem';
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div>
        <h3>{category}</h3>
        <div className="card-grid">
          {isLoading && <h3>Loading Gif!</h3>}
          {images.map((img) => (
            <GifItem key={img.id} {...img} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GifGrid;

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
