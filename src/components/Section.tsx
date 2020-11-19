import React, { ReactNode } from "react";
import styled from "styled-components";

import Colors from "app_constants/colors";

const Section = ({ title, children }: SectionProps) => {
  return (
    <Styled>
      <h3 className="title">{title}</h3>
      {children}
    </Styled>
  );
};

const Styled = styled.div`
  background-color: ${Colors.WHITE};
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: 10px;

  .title {
    margin-top: 0;
  }
`;

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default Section;
