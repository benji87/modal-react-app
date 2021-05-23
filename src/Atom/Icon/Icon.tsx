import React from "react";
import styled from "styled-components";

type Props = {
  color?: string;
  disabled?: boolean;
  handleClick?: (e: object) => void;
  icon: string;
};

const StyledIcon = styled.div`
  direction: ltr;
  display: inline-block;
  font-family: "Material Icons";
  font-style: normal;
  font-size: 24px;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 1;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
`;

export const Icon = (props: Props) => {
  const { disabled, handleClick, icon } = props;

  const _handleClick = React.useCallback(
    (e: object) => {
      if (handleClick && !disabled) {
        handleClick(e);
      }
    },
    [disabled, handleClick]
  );

  return (
    <StyledIcon {...props} className="material-icons" onClick={_handleClick}>
      {icon}
    </StyledIcon>
  );
};
