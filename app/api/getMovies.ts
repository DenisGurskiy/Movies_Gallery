import { Movie } from "@/type/movie";

export const getAllMovies = async (): Promise<Movie[]> => {
  const response = await fetch(
    "https://my-json-server.typicode.com/moviedb-tech/movies/list"
  );

  if (!response.ok) throw new Error("Unable to fetch movies");

  return response.json();
};
