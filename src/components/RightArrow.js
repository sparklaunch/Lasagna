import { AiOutlineRight } from "react-icons/ai";
import { useContext } from "react";
import BookContext from "../contexts/BookContext";
import AudioContext from "../contexts/AudioContext";

const RightArrow = () => {
  const { book } = useContext(BookContext);
  const { setPlaying } = useContext(AudioContext);
  const flipRight = () => {
    setPlaying(false);
    book.current.pageFlip().flipNext();
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
