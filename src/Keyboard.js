import React from "react";
import Styled from "styled-components";
import ColorUtils from "color";
import { Colors } from "./config";

const Keyboard = props => (
  <Wrapper>
    {props.buttons.map(button => (
      <KeyboardButton
        key={button.label}
        data-value={button.value}
        onClick={props.clickHandler}
      >
        {button.label}
      </KeyboardButton>
    ))}
  </Wrapper>
);

const Wrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: ${Colors.accent1};
`;

const KeyboardButton = Styled.button`
  border: 0;
  color: ${Colors.accent2};
  font-size: 13px;
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  padding: 2em;

  &:active {
    background-color: #082d48;
  }
`;

export default Keyboard;
