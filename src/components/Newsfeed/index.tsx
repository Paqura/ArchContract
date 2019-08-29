import * as React from "react";
import Story from "./Story";
import { getCurrentYear } from "./utils";
import FlyButton from "./shared/FlyButton";

interface Props {
  title: string;
}

const Newsfeed = (props: Props) => {
  const currentYear = getCurrentYear();

  return (
    <div>
      <header>
        <h1>{props.title}</h1>
      </header>
      <Story currentYear={currentYear} />

      <FlyButton>Parent button</FlyButton>
    </div>
  );
};

export default Newsfeed;
