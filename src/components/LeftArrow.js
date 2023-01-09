import { AiOutlineLeft } from "react-icons/ai";

const LeftArrow = () => {
  return (
    <div
      className={"fixed top-[50%] translate-y-[-50%] left-[5vw] cursor-pointer"}
    >
      <AiOutlineLeft color={"white"} size={"3em"} />
    </div>
  );
};

export default LeftArrow;
