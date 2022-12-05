import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpert App</h1>
      <p>GifExpert is a free and open source project to develop GifExpert.</p>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories?.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
