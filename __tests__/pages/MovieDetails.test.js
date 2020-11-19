import React from "react";
import Enzyme, { shallow } from "enzyme";
import { Rating } from "@material-ui/lab";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { LoadingIndicator } from "components";
import MovieDetails from "pages/MovieDetails/view.tsx";
import { parseDate, parseScore, parsePeople, parseRating } from "utils/parsing";
import { initialState } from "mocks";

Enzyme.configure({ adapter: new Adapter() });

describe("MovieDetails Page Component", () => {
  let wrapper;
  const movie = initialState.movies.data[0];
  beforeEach(() => {
    wrapper = shallow(<MovieDetails movie={movie} imageLoaded />);
  });

  it("should render correctly", () => {
    const loadingIndicator = wrapper.find(LoadingIndicator);

    const title = wrapper.find(".title");
    const rating = wrapper.find(Rating);
    const description = wrapper.find(".description");
    const backdrop = wrapper.find(".backdrop");

    expect(loadingIndicator.exists()).toBeFalsy();
    expect(title.text()).toBe(
      `${movie.title} (${parseRating(movie.imdb_rating)})`
    );
    expect(rating.prop("value")).toBe(parseScore(movie.imdb_rating));
    expect(description.text()).toBe(`Movie Description: ${movie.overview}`);
    expect(
      wrapper.contains(
        `${parseDate(movie.released_on)} | ${movie.length} | ${
          movie.classification
        } | ${parsePeople(movie.director)}`
      )
    ).toBeTruthy();
    expect(wrapper.contains(parsePeople(movie.cast))).toBeTruthy();
    expect(backdrop.exists()).toBeTruthy();
  });

  it("should show movie image correctly", () => {
    const image = wrapper.find(".movieImg");

    expect(image.prop("src")).toBe(movie.poster);
    expect(image.prop("alt")).toBe(movie.title);
  });
});
