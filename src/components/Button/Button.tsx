import * as React from "react";
import { ButtonContainer } from "./Button.styles";

interface IProps {
  name: string;
  size: "large" | "small";
  onClick(): void;
}

const Button: React.SFC<IProps> = props => (
  <ButtonContainer onClick={props.onClick}>
    {props.name}
  </ButtonContainer>
);

export default Button;
