export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=NlY2zxMkb5zts3S3ZuH6pBT8L834VZPS&q=${category}&limit=10`;

  const response = await fetch(url);
  const { data = [] } = await response.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);

  return gifs;
};
