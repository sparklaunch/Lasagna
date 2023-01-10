import { createContext, useState } from "react";

const AudioContext = createContext(null);

export const AudioContextProvider = ({ children }) => {
  const [audio, setAudio] = useState("");
  const [playing, setPlaying] = useState(false);
  return (
    <AudioContext.Provider value={{ audio, setAudio, playing, setPlaying }}>
      {children}
    </AudioContext.Provider>
  );
};

export default AudioContext;
