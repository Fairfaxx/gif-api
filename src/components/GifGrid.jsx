import { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { getGif } from './../helpers/getGif';
import GifItem from './GifItem';

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
