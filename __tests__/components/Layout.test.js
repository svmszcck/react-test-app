import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { Layout } from "components";

Enzyme.configure({ adapter: new Adapter() });

describe("Layout Component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <Layout>
        <p>I am the child</p>
      </Layout>
    );

    expect(wrapper.contains("I am the child")).toBeTruthy();
  });
});
