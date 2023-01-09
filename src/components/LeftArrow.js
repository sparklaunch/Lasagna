import { AiOutlineLeft } from "react-icons/ai";
import { useContext } from "react";
import BookContext from "../contexts/BookContext";

const LeftArrow = () => {
  const { book } = useContext(BookContext);
  const flipLeft = () => {
    book.current.pageFlip().flipPrev();
  };
  return (
    <div
      className={"fixed top-[50%] translate-y-[-50%] left-[5vw] cursor-pointer"}
      onClick={flipLeft}
    >
      <AiOutlineLeft color={"white"} size={"3em"} />
    </div>
  );
};

export default LeftArrow;
