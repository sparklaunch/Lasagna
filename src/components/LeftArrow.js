import { AiOutlineLeft } from "react-icons/ai";
import { useContext } from "react";
import BookContext from "../contexts/BookContext";
import SoundContext from "../contexts/SoundContext";
import Sound from "react-sound";

const LeftArrow = () => {
  const { book } = useContext(BookContext);
  const { setPlaying } = useContext(SoundContext);
  const flipLeft = () => {
    book.current.pageFlip().flipPrev();
    setPlaying(Sound.status.STOPPED);
  };
  return (
    <div
      className={
        "fixed top-[50%] translate-y-[-50%] left-[5vw] cursor-pointer hover:scale-125 transition-all"
      }
      onClick={flipLeft}
    >
      <AiOutlineLeft color={"white"} size={"3em"} />
    </div>
  );
};

export default LeftArrow;
