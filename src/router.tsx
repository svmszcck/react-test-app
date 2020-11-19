import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { Navbar, Footer, ScrollTop } from "components";
import { Home, MovieDetails } from "pages";

export default function App() {
  return (
    <Router>
      <Styled>
        <ScrollTop />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movie/:slug">
            <MovieDetails />
          </Route>
        </Switch>
        <Footer />
      </Styled>
    </Router>
  );
}

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
