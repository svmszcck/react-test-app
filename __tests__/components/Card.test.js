import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Rating } from "@material-ui/lab";

import { Card } from "components";

Enzyme.configure({ adapter: new Adapter() });

describe("Card Component", () => {
  const poster = "https://bit.ly/3fbOa1P";

  it("should render correctly", () => {
    const wrapper = shallow(
      <Card title="Blabla" id="678hjkjkdg" score={7.3} img={poster} />
    );

    const title = wrapper.find(".title");
    const rating = wrapper.find(Rating);
    const image = wrapper.find(".movieImg");

    expect(rating.prop("value")).toBe(3.65);
    expect(title.text()).toBe("Blabla");
    expect(image.prop("src")).toBe(poster);
    expect(image.prop("alt")).toBe("Blabla");
  });
});
