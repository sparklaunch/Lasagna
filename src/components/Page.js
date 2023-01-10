import { forwardRef, useContext } from "react";
import AudioContext from "../contexts/AudioContext";

const Page = forwardRef((props, ref) => {
  const { name } = props;
  const { setAudio, setPlaying } = useContext(AudioContext);
  const onClick = () => {
    setAudio(`/assets/${name}.m4a`);
    setPlaying(true);
  };
  return (
    <div className={"object-fill overflow-y-clip"} ref={ref} onClick={onClick}>
      <img
        src={`/assets/${name}.avif`}
        alt="page"
        className={"cursor-pointer"}
      />
    </div>
  );
});

export default Page;
