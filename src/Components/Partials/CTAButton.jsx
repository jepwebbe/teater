import React from "react";
import styled from "styled-components";
const CTAButton = ({ bgColor, btnText, width }) => {
  return (
    <ButtonStyled width={width} bgColor={bgColor}>
      {btnText}
    </ButtonStyled>
  );
};
const ButtonStyled = styled.span`
  display: inline-block;
  padding: 0.5rem ${(props) => props.width};
  background-color: ${(props) => props.bgColor};
  color: white;
  border: none;
  cursor: pointer;
  
`;
export default CTAButton;
