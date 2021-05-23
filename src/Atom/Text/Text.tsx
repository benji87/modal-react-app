import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

type Props = {
  children: React.ReactChild;
  color?: string;
  fontSize?: number;
};

const StyledText = styled.p`
  color: ${(props) => props.color || theme.colors.secondary};
  font-family: ${theme.font.family};
  margin: ${theme.spacing.medium}px auto ${theme.spacing.large}px;
`;

export const Text = (props: Props) => {
  const { children } = props;
  return <StyledText {...props}>{children}</StyledText>;
};
