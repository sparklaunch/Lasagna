import { AiOutlineLeft } from "react-icons/ai";
import { useContext } from "react";
import BookContext from "../contexts/BookContext";
import AudioContext from "../contexts/AudioContext";

const LeftArrow = () => {
  const { book } = useContext(BookContext);
  const { setPlaying } = useContext(AudioContext);
  const flipLeft = () => {
    setPlaying(false);
    book.current.pageFlip().flipPrev();
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
