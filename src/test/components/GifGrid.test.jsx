import { render, screen } from '@testing-library/react';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Test in <GifGrid />', () => {
  const category = 'One Punch';

  test('should display the loading at the beginning', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText('Loading Gif!'));
    expect(screen.getByText(category));
  });

  test('should display items when useFetchGifs loads images', () => {
    const gifs = [
      {
        id: 'abc',
        title: 'Die Hard',
        url: 'https://www.diehard.com/jpg',
      },
      {
        id: '123',
        title: 'Dragon Ball',
        url: 'https://www.dragonball.com/jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
    // screen.debug();
  });
});
