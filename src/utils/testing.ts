import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { initialState } from "mocks";
import { initializeAPI } from "utils/api";

export const initialize = () => {
  initializeAPI();
  Enzyme.configure({ adapter: new Adapter() });

  const middlewares: Array<any> = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  return { store };
};
