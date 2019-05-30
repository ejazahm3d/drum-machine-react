import React from "react";

const SoundButton = ({ sounds, handleOnClick }) =>
  sounds.map(sound => (
    <button
      key={sound.id}
      id={sound.id}
      className="btn btn-info m-2 drum-pad"
      onClick={e => handleOnClick(e)}
    >
      {sound.keyTrigger}
      <audio src={sound.url} id={sound.keyTrigger} className="clip" />
    </button>
  ));

export default SoundButton;
