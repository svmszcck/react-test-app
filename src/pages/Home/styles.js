import styled from "styled-components";

export default styled.div`
  .movieList {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    padding-bottom: 1rem;

    .carousel {
      button {
        display: none;
      }
    }
    .movieCard {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
  .warning {
    text-align: center;
  }
`;
