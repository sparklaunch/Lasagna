import { AiOutlineRight } from "react-icons/ai";

const RightArrow = () => {
  return (
    <div
      className={
        "fixed top-[50%] translate-y-[-50%] right-[5vw] cursor-pointer"
      }
    >
      <AiOutlineRight color={"white"} size={"3em"} />
    </div>
  );
};

export default RightArrow;
