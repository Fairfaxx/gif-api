import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import AddCategory from '../../components/AddCategory';

describe('Test <AddCategory />', () => {
  test('should change the box text', () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'foo' } });
    expect(input.value).toBe('foo');
    // screen.debug();
  });

  test('should call onNewCategory if the input has a value', () => {
    const inputValue = 'foo';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('should be called onNewCategory if the input has no value', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
