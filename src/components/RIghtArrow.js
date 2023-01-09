import { AiOutlineRight } from "react-icons/ai";
import { useContext } from "react";
import BookContext from "../contexts/BookContext";
import SoundContext from "../contexts/SoundContext";
import Sound from "react-sound";

const RightArrow = () => {
  const { book } = useContext(BookContext);
  const { setPlaying } = useContext(SoundContext);
  const flipRight = () => {
    book.current.pageFlip().flipNext();
    setPlaying(Sound.status.STOPPED);
  };
  return (
    <div
      className={
        "fixed top-[50%] translate-y-[-50%] right-[5vw] cursor-pointer hover:scale-125 transition-all"
      }
      onClick={flipRight}
    >
      <AiOutlineRight color={"white"} size={"3em"} />
    </div>
  );
};

export default RightArrow;
