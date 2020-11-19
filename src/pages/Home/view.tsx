import React from "react";
import { isEmpty } from "lodash";

import { Card, Layout, Section, LoadingIndicator } from "components";
import { Movie, Genres } from "types";
import { getMovie } from "utils/parsing";
import Styled from "./styles";

const renderCard = (movie: Movie) => {
  const { id, slug, poster, title, imdb_rating } = movie;
  return (
    <Card
      img={poster}
      title={title}
      score={imdb_rating}
      className="movieCard"
      key={id}
      slug={slug}
    />
  );
};

const HomeView = ({ movies, genres, loading }: HomeViewProps) => {
  return (
    <Styled>
      <Layout>
        {loading ? (
          <LoadingIndicator />
        ) : !isEmpty(movies) ? (
          Object.keys(genres).map((key) => (
            <Section title={key} key={key}>
              <div className="movieList">
                {genres[key].map((movieSlug) =>
                  renderCard(getMovie(movieSlug, movies) as Movie)
                )}
              </div>
            </Section>
          ))
        ) : (
          <h3 className="warning">There isn't anything to show :(</h3>
        )}
      </Layout>
    </Styled>
  );
};

type HomeViewProps = {
  movies: Array<Movie>;
  genres: Genres;
  loading: boolean;
};

export default HomeView;
