/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, FunctionComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

const ScrollTop: FunctionComponent<RouteComponentProps> = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      unlisten();
    };
  }, []);

  return null;
};

export default withRouter(ScrollTop);
