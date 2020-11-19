import { Action, MoviesState } from "types";
import { UPDATE_MOVIES, SET_LOADING_STATE } from "../constants";

const initialState: MoviesState = {
  data: [],
  isLoading: true,
};

const postsReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case UPDATE_MOVIES:
      return { ...state, ...payload };
    case SET_LOADING_STATE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default postsReducer;
