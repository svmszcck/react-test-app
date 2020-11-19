import React, { ReactNode } from "react";
import styled from "styled-components";

const Layout = ({ children }: LayoutProps) => {
  return <Styled>{children}</Styled>;
};

const Styled = styled.div`
  position: relative;
  padding: 4% 8% 4% 8%;
`;

type LayoutProps = {
  children: ReactNode;
};

export default Layout;
