/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";

import Colors from "app_constants/colors";
import { PORTFOLIO } from "app_constants/general";

const Footer = () => {
  return (
    <Styled>
      <p>
        <span>Made by </span>
        <a href={PORTFOLIO} target="_blank" className="link">
          Onur Demirtaş
        </a>
        <span> ❤️</span>
      </p>
    </Styled>
  );
};

const Styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7rem;
  background-color: ${Colors.BLUE_DARK};
  font-weight: bold;
  color: ${Colors.WHITE};
  margin-top: auto;

  .link {
    color: ${Colors.SECONDARY_LIGHT};
  }
`;

export default Footer;
