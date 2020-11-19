import { isEmpty } from "lodash";

import { Movie, Genres } from "types";

export const getGenres = (movies: Array<Movie>): Genres => {
  if (isEmpty(movies)) return {};

  let genres: Genres = {};
  movies.forEach((movie) => {
    movie.genres.forEach((elem) => {
      const genre = genres[elem];
      if (!genre) genres[elem] = [movie.slug];
      else if (!genre.includes(movie.slug)) genre.push(movie.slug);
    });
  });

  return genres;
};

export const getMovie = (
  movieSlug: string,
  movies: Array<Movie>
): Movie | undefined => {
  return movies.find(({ slug }) => slug === movieSlug);
};

export const parseDate = (date: string): number | string => {
  return date ? new Date(date).getFullYear() : "-";
};

export const parseRating = (rating: number): string => rating.toFixed(1);

export const parseScore = (score: number): number => score / 2;

export const parsePeople = (cast: string | Array<string>): string => {
  return Array.isArray(cast) ? cast.join(", ") : cast;
};
