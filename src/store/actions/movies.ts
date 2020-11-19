import { moviesService, searchMoviesService } from "services/movie";
import { updateLoginState } from "utils/ui";
import { UPDATE_MOVIES, MOVIES_LOADING } from "../constants";

export const getMovies = (query?: string) => async (dispatch: Function) => {
  updateLoginState(dispatch, MOVIES_LOADING, true);
  const data = await (query ? searchMoviesService(query) : moviesService());
  if (data?.movies) {
    dispatch({ type: UPDATE_MOVIES, payload: { data: data.movies } });
  }
  updateLoginState(dispatch, MOVIES_LOADING, false);
};
