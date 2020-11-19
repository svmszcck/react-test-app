import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { Card, Section, LoadingIndicator } from "components";
import { Home } from "pages";
import { initialize } from "utils/testing";
import { SET_LOADING_STATE, MOVIES_LOADING } from "store/constants";

const { store } = initialize();

describe("Home Page Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
  });

  it("should render correctly", () => {
    const sections = wrapper.find(Section);
    const cards = wrapper.find(Card);
    const warning = wrapper.find(".warning");
    const loadingIndicator = wrapper.find(LoadingIndicator);

    expect(sections.exists()).toBeTruthy();
    expect(sections.length).toBe(6);
    expect(cards.length).toBe(6);
    expect(warning.exists()).toBeFalsy();
    expect(loadingIndicator.exists()).toBeFalsy();
  });

  it("should change the loading state", () => {
    const showLoadingIndicator = () => ({
      type: SET_LOADING_STATE,
    });
    const action = showLoadingIndicator();

    store.dispatch(action);

    const actions = store.getActions();
    const expectedPayload = {
      ...action,
      payload: {
        [MOVIES_LOADING]: true,
      },
    };

    expect(actions[0]).toEqual(expectedPayload);
  });
});
