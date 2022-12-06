import { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form onSubmit={onHandleSubmit} aria-label="form">
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

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
