import { useState } from 'react';

const AddCategory = ({ onNewCategory }) => {
  const [onInputValue, setOnInputValue] = useState('');

  const onInputChange = (e) => {
    setOnInputValue(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (onInputValue === '') {
      return;
    }
    onNewCategory(onInputValue.trim());
    setOnInputValue('');
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Add Category"
        name="category"
        value={onInputValue}
        onChange={onInputChange}
      />
      {/* <button type="submit">Send</button> */}
    </form>
  );
};

export default AddCategory;
