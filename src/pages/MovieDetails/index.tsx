/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";

import { getMovie } from "utils/parsing";
import { imageAsyncLoader } from "utils/general";
import { getMovies } from "store/actions/movies";
import { Store } from "types";
import MovieDetailsView from "./view";

const MovieDetails = () => {
  const dispatch = useDispatch();
  let { slug } = useParams<Params>();
  const [imageLoaded, setImageLoaded] = useState(false);
  const { data: movies } = useSelector((state: Store) => state.movies);

  useEffect(() => {
    if (isEmpty(movies)) dispatch(getMovies());
    loadImage();
  }, [movies]);

  const movie = useMemo(() => {
    if (slug && !isEmpty(movies)) return getMovie(slug, movies);
  }, [slug, movies]);

  const loadImage = async () => {
    if (movie) {
      const loaded = await imageAsyncLoader(movie.backdrop);
      if (loaded) setImageLoaded(true);
    }
  };

  return <MovieDetailsView movie={movie} imageLoaded={imageLoaded} />;
};

type Params = {
  slug: string;
};

export default MovieDetails;
