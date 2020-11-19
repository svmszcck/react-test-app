import styled from "styled-components";

import Colors from "app_constants/colors";

export default styled.div<StyledProps>`
  .container {
    padding-bottom: 5rem;

    .backdrop {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0.9;
      background-size: cover;
      ${({ backdrop }) =>
        backdrop &&
        `
         background: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url('${backdrop}');
      `}
    }
    .wrapper {
      display: flex;
      flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
      color: ${({ isMobile }) => (isMobile ? "initial" : Colors.WHITE)};
      position: relative;
      justify-content: center;
      z-index: 1;

      .movieImg {
        width: ${({ isMobile }) => (isMobile ? "100%" : "15rem")};
        margin-right: 2rem;
        ${({ isMobile }) => isMobile && "margin-bottom: 2rem"};
        border-radius: 20px;
      }
      .info {
        .topSection {
          display: flex;
          flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
          align-items: center;
          margin-bottom: 2rem;

          .title {
            font-weight: bold;
            font-size: 1.3rem;
            margin: 0 2rem 0 0;
            ${({ isMobile }) => isMobile && "text-align: center"};
          }
          .rating {
            ${({ isMobile }) =>
              isMobile ? "margin-top: 2rem" : "margin-left: auto"};
          }
        }
      }
    }
  }
`;

type StyledProps = {
  backdrop: string | undefined;
  isMobile: boolean;
};
