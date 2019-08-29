import * as React from "react";
import { CurrentYear } from "./styles";

interface Props {
  currentYear: number;
}

const Story = (props: Props) => <CurrentYear>{props.currentYear}</CurrentYear>;

export default Story;
