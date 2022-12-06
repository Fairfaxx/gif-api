import { getGif } from '../../helpers/getGif';

describe('test in the getGif Fn', () => {
  test('should return an array of gifs', async () => {
    const gifs = await getGif('Die Hard');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
