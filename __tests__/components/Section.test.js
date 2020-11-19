import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { Section } from "components";

Enzyme.configure({ adapter: new Adapter() });

describe("Section Component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <Section title="Foo">
        <p>I am the child</p>
      </Section>
    );

    const title = wrapper.find(".title");

    expect(wrapper.contains("I am the child")).toBeTruthy();
    expect(title.text()).toBe("Foo");
  });
});
