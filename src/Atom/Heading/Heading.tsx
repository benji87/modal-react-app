import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

type Props = {
  children: React.ReactChild;
  color?: string;
  level: 1 | 2 | 3 | 4 | 5;
};

const StyledHeading = styled.div`
  * {
    color: ${(props) => props.color || theme.colors.primary};
    font-family: ${theme.font.family};
    font-size: 25px;
    margin: 0;

    @media (min-width: 768px) {
      font-size: revert;
    }
  }
`;

export const Heading = (props: Props) => {
  const { children, level } = props;
  const Tag: any = `h${level}`;
  return (
    <StyledHeading {...props}>
      <Tag>{children}</Tag>
    </StyledHeading>
  );
};
