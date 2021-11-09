export const getMoviesBySearchTerm = async (searchTerm) => {
  const url = new URL("http://www.omdbapi.com");
  url.searchParams.append("apikey", "enter-key");
  url.searchParams.append("s", searchTerm);
  const result = await fetch(url);
  return result.json();
};
console.log(getMoviesBySearchTerm("Batman"));

export const getMovieDetailsById = async (id) => {
  const url = new URL("http://www.omdbapi.com");
  url.searchParams.append("apikey", "enter-key");
  url.searchParams.append("i", id);
  const result = await fetch(url);
  return result.json();
};
console.log(getMovieDetailsById("tt3896198"));
