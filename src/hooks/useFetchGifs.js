import React, { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGif';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async (category) => {
    const newImages = await getGif(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages(category);
  }, []);

  return {
    images,
    isLoading,
  };
};
