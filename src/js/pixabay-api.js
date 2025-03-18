export async function fetchImages(searchQuery) {
  const API_KEY = '49395214-508d98637227ed6d41be849b6';
  const BASE_URL = 'https://pixabay.com/api/';
  const PARAMS = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  try {
    const response = await fetch(`${BASE_URL}?${PARAMS}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
