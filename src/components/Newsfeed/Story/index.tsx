import * as React from "react";
import { CurrentYear } from "./styles";
import FlyButton from "../shared/FlyButton";

interface Props {
  currentYear: number;
}

const Story = (props: Props) => (
  <>
    <FlyButton theme="dark">Child button</FlyButton>
    <CurrentYear>{props.currentYear}</CurrentYear>
  </>
);

export default Story;
