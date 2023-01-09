import { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  const { name } = props;
  return (
    <div className={"object-fill overflow-y-clip"} ref={ref}>
      <img
        src={`/assets/${name}.avif`}
        alt="page"
        className={"cursor-pointer"}
      />
    </div>
  );
});

export default Page;
