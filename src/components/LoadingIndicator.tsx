import React from "react";
import styled from "styled-components";
import { List } from "react-content-loader";

import Colors from "app_constants/colors";

const Loading = () => {
  return (
    <Styled>
      <List backgroundColor={Colors.GRAY} foregroundColor={Colors.GRAY} />
    </Styled>
  );
};

const Styled = styled.div`
  padding: 4rem;
`;

export default Loading;
