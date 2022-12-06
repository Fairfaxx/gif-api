import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Testing useFetchGifs hook', () => {
  test('should return the initial value', () => {
    const { result } = renderHook(() => useFetchGifs('Die Hard'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return an array of images and isLoading in false', async () => {
    const { result } = renderHook(() => useFetchGifs('Die Hard'));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
