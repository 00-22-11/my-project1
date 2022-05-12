export const getCharacters = async () => {
  const baseUrl = await fetch('https://rickandmortyapi.com/api/character');
  const response = await baseUrl.json();
  const results = response.results;

  return results;
};
