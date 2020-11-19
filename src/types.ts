// API
export type Movie = {
  backdrop: string;
  cast: Array<string>;
  classification: string;
  director: string;
  genres: Array<string>;
  id: string;
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  slug: string;
  title: string;
};

export type Genres = { [key: string]: Array<string> };

// Redux
export type Action = {
  type: string;
  payload: any;
};

export type Store = {
  movies: MoviesState;
};

export type MoviesState = {
  data: Array<Movie>;
  isLoading: boolean;
};
