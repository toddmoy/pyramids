import React from "react";
import Styled from "styled-components";
import { Colors, Fonts } from "./config";

const PageTitle = Styled.h1`
  font-family: ${Fonts.primary};
  font-size: 18px;
  margin-bottom: 1em;
  font-weight: bold;
  text-align: center;
`;

export default PageTitle;
