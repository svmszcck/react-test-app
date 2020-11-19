import { SET_LOADING_STATE } from "store/constants";

export const updateLoginState = (
  dispatch: Function,
  key: string,
  isLoading: boolean
): void => {
  dispatch({
    type: SET_LOADING_STATE,
    payload: { [key]: isLoading },
  });
};
