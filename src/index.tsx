import * as React from "react";
import { render } from "react-dom";
import Newsfeed from "./components/Newsfeed";

function App() {
  return (
    <>
      <header>Header</header>
      <Newsfeed title="super title" />
    </>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
