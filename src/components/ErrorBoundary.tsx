import React, { Component, ErrorInfo } from "react";
import styled from "styled-components";

class ErrorBoundary extends Component {
  state = {
    errorMsg: "",
  };

  static getDerivedStateFromError(error: Error) {
    return { errorMsg: error.toString() };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Uncaught error: ", error, info);
  }

  render() {
    if (this.state.errorMsg)
      return (
        <Styled>
          <p className="appError">Something went wrong :(</p>
          <p className="appError">Please refresh the page!</p>
        </Styled>
      );
    return this.props.children;
  }
}

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 10rem 2rem 10rem 2rem;
  text-align: center;

  .appError {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0 0 0.5rem 0;
  }
`;

export default ErrorBoundary;
