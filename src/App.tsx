import React from "react";
import { Provider } from "react-redux";

import { ErrorBoundary } from "components";
import store from "store";
import Router from "router";
import { initializeAPI } from "utils/api";

initializeAPI();

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
