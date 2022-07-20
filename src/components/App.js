import Home from "./Home/Home";
import React from "react";
import Screen02 from "./Screen02/Screen02";

import "./App.css";

export default function App() {
  const [screen, setScreen] = React.useState(true);

  return (
    <>
      <div>
        {screen ? (
          <div>
            <Home />
            <button onClick={() => setScreen(!screen)}>Iniciar Recall!!</button>
          </div>
        ) : (
          <Screen02 />
        )}
      </div>
    </>
  );
}
