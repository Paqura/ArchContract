import * as React from "react";
import { FlyButton } from "./styles";

interface Props {
  children: React.ReactChildren | string;
  theme?: "dark" | "light";
}

export default (props: Props) => {
  return <FlyButton theme={props.theme}>{props.children}</FlyButton>;
};
