import { render, screen } from '@testing-library/react';
import GifItem from '../../components/GifItem';

describe('Test GifItem component', () => {
  const title = 'test title';
  const url = 'https://dragon-ball.com/goku.jpg';
  const alt = 'test alt';
  test('should match snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('should display the image with the url and alt correctly', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should display the title', () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
