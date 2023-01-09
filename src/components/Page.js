import { forwardRef, useContext } from "react";
import Sound from "react-sound";
import SoundContext from "../contexts/SoundContext";

const Page = forwardRef((props, ref) => {
  const { playing, setPlaying } = useContext(SoundContext);
  const { name } = props;
  const playSound = () => {
    if (name === 3) {
      setPlaying(Sound.status.PLAYING);
    }
  };
  const onFinishedPlaying = () => {
    setPlaying(Sound.status.STOPPED);
  };
  return (
    <div
      className={"object-fill overflow-y-clip"}
      ref={ref}
      onClick={playSound}
    >
      <img
        src={`/assets/${name}.avif`}
        alt="page"
        className={"cursor-pointer"}
      />
      <Sound
        url={`/assets/${name}.m4a`}
        playStatus={playing}
        onFinishedPlaying={onFinishedPlaying}
      />
    </div>
  );
});

export default Page;
