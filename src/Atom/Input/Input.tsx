import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { lighten } from "polished";

type Props = {
  disabled?: boolean;
  handleSelection?: (e: object) => void;
  label: string;
  name?: string;
  type: string;
};

type StyledLabelProps = {
  htmlFor: string;
};

const StyledInputWrapper = styled.label<StyledLabelProps>`
  align-items: center;
  display: flex;
  text-align: left;
  width: 100%;

  input[type="radio"] {
    border-radius: 100%;
    &:after {
      border-radius: 100%;
    }
  }
`;

const StyledLabel = styled.div`
  display: inline-block;
  font-family: ${theme.font.family};
  overflow: hidden;
  padding: 10px;
  text-overflow: ellipsis;
  text-wrap: none;
  white-space: nowrap;
`;

const StyledInput = styled.input`
  appearance: none;
  background-color: ${theme.colors.backgroundLight};
  border: 1px solid ${lighten(0.2, theme.colors.secondary)};
  border-radius: 6px;
  height: 24px;
  margin: 10px 0 10px 10px;
  width: 24px;

  &:checked {
    background-color: ${theme.colors.secondaryAlt};
    border: none;
    position: relative;
    transition: all 0.25s ease-in-out;

    &:after {
      background-color: ${lighten(0.6, theme.colors.secondaryAlt)};
      border-radius: 2px;
      content: "";
      height: 8px;
      left: calc(50% - 4px);
      position: absolute;
      top: calc(50% - 4px);
      width: 8px;
    }
  }
`;

export const Input = (props: Props) => {
  const { disabled, handleSelection, label, name, type } = props;
  return (
    <StyledInputWrapper htmlFor={label}>
      <StyledInput
        id={label}
        type={type}
        onChange={(e) => (handleSelection ? handleSelection(e) : undefined)}
        name={name || label}
        value={label}
        disabled={disabled}
      />
      <StyledLabel>{label}</StyledLabel>
    </StyledInputWrapper>
  );
};
