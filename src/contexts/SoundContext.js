import { createContext, useState } from "react";
import Sound from "react-sound";

const SoundContext = createContext(null);

export const SoundContextProvider = ({ children }) => {
  const [playing, setPlaying] = useState(Sound.status.STOPPED);
  return (
    <SoundContext.Provider value={{ playing, setPlaying }}>
      {children}
    </SoundContext.Provider>
  );
};

export default SoundContext;
