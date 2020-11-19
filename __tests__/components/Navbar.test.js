import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "components";
import { initialize } from "utils/testing";

const { store } = initialize();

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("Navbar Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );
  });

  it("should search correctly", async () => {
    const input = wrapper.find("input");
    const searchIcon = wrapper.find(".searchIcon").at(0);

    input.simulate("change", { target: { value: "Blabla" } });
    searchIcon.simulate("click");
    searchIcon.prop("onClick")();

    const actions = store.getActions();
    const inputActive = wrapper.find(".input--active");

    expect(actions).toEqual([]);
    expect(inputActive.exists()).toBeTruthy();
    expect(mockHistoryPush).toHaveBeenCalledWith("/?query=Blabla");
  });

  it("should be able to clear input", async () => {
    const input = wrapper.find("input");

    input.simulate("change", { target: { value: "asdasd" } });
    input.simulate("change", { target: { value: "" } });

    const inputActive = wrapper.find(".input--active");

    expect(inputActive.exists()).toBeFalsy();
  });
});
