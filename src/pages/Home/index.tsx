/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getMovies } from "store/actions/movies";
import { Store } from "types";
import { getGenres } from "utils/parsing";
import { getURLParam } from "utils/general";
import HomeView from "./view";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data: movies, isLoading } = useSelector(
    (state: Store) => state.movies
  );

  useEffect(() => {
    const query = getURLParam("query");
    dispatch(getMovies(query));
  }, [location]);

  const genres = useMemo(() => getGenres(movies), [movies]);

  return <HomeView movies={movies} genres={genres} loading={isLoading} />;
};

export default Home;
