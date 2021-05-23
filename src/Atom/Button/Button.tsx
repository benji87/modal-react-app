import React from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";
import { theme } from "../../theme";

type Props = StyledButtonProps & {
  children: React.ReactChild;
  handleClick?: () => void;
};

type StyledButtonProps = {
  background?: string;
};

const StyledButton = styled.button<StyledButtonProps>`
  appearance: none;
  -webkit-appearance: none;
  background-color: ${(props) => props.background || theme.colors.primaryBtn};
  border: 0;
  border-radius: 12px;
  color: ${(props) => lighten(1, props.background || theme.colors.primaryBtn)};
  display: block;
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.medium}px;
  font-weight: 600;
  padding: ${theme.spacing.small}px;
  width: 100%;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      darken(0.1, props.background || theme.colors.primaryBtn)};
    color: ${(props) =>
      darken(0.5, props.background || theme.colors.primaryBtn)};
    cursor: pointer;
  }
`;

export const Button = (props: Props) => {
  const { children, handleClick } = props;
  return (
    <StyledButton onClick={handleClick} {...props}>
      {children}
    </StyledButton>
  );
};
