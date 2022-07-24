import React from "react";
import Logo from "../Logo/Logo";
import PlayGame from "../PlayGame/PlayGame";
import "./App.css";

export default function App() {
  const [screen, setScreen] = React.useState(true);

  return (
    <>
      {screen ? (
        <div className="home">
          <Logo />
          <button onClick={() => setScreen(!screen)}>Iniciar Recall!!</button>
        </div>
      ) : (
        <PlayGame />
      )}
    </>
  );
}
