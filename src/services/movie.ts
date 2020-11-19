import { sendRequest } from "utils/api";
import { Movie } from "types";

export const moviesService = (): Promise<{ movies: Array<Movie> }> => {
  return sendRequest("movies");
};

export const searchMoviesService = (
  query: string
): Promise<{ movies: Array<Movie> }> => {
  return sendRequest("movies", { q: query });
};
