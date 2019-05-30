import React, { useState, useEffect } from "react";
import "./App.css";
import sounds from "./soundsDB";
import SoundButton from "./SoundButton";

const App = () => {
  const [display, setDisplay] = useState("Click or Press the Keys to Play");

  useEffect(() => {
    document.body.addEventListener("keypress", handleKeyPress);
    freeCodeCampScripts();
  }, []);

  const freeCodeCampScripts = () => {
    const script = document.createElement("script");

    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
  };

  const handleKeyPress = e => {
    sounds.forEach(sound => {
      if (sound.keyTrigger.toLowerCase() === e.key.toLowerCase()) {
        setDisplay(sound.id);
        playAudio(sound.url);
      }
    });
  };

  const handleOnClick = e => {
    setDisplay(e.target.id);
    playAudio(e.target.querySelector(".clip").src);
  };
  const playAudio = url => {
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <div className="App" id="drum-machine">
      <h1 className="text-light">Drum Machine</h1>
      <h5 id="display" className="text-light">
        {display}
      </h5>
      <SoundButton
        sounds={sounds}
        handleOnClick={handleOnClick}
        display={display}
      />
    </div>
  );
};

export default App;
