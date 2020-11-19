import React from "react";
import { makeStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useMediaQuery } from "react-responsive";

import { Layout, LoadingIndicator } from "components";
import { Movie } from "types";
import { parseDate, parseScore, parsePeople, parseRating } from "utils/parsing";
import { mobile } from "utils/breakpoints";
import { RATING_PRECISION } from "app_constants/general";
import Colors from "app_constants/colors";
import Styled from "./styles";

const useStyles = makeStyles({
  iconEmpty: { color: Colors.GRAY_LIGHT },
});

const MovieDetailsView = ({ movie, imageLoaded }: MovieDetailsViewProps) => {
  const classes = useStyles();
  const isMobile = useMediaQuery(mobile);

  return (
    <Styled backdrop={movie?.backdrop} isMobile={isMobile}>
      {imageLoaded ? (
        movie && (
          <Layout>
            <div className="container">
              <div className="wrapper">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="movieImg"
                />
                <div className="info">
                  <div className="topSection">
                    <p className="title">{`${movie.title} (${parseRating(
                      movie.imdb_rating
                    )})`}</p>
                    <Rating
                      name="read-only"
                      value={parseScore(movie.imdb_rating)}
                      readOnly
                      className="rating"
                      size="large"
                      precision={RATING_PRECISION}
                      classes={
                        !isMobile ? { iconEmpty: classes.iconEmpty } : undefined
                      }
                    />
                  </div>
                  <p>
                    {`${parseDate(movie.released_on)} | ${movie.length} | ${
                      movie.classification
                    } | ${parsePeople(movie.director)}`}
                  </p>
                  <p>
                    <b>Cast:</b> {parsePeople(movie.cast)}
                  </p>
                  <p className="description">
                    <b>Movie Description: </b>
                    {movie.overview}
                  </p>
                </div>
              </div>
              {!isMobile && <div className="backdrop"></div>}
            </div>
          </Layout>
        )
      ) : (
        <LoadingIndicator />
      )}
    </Styled>
  );
};

type MovieDetailsViewProps = {
  movie: Movie | undefined;
  imageLoaded: boolean;
};

export default MovieDetailsView;
