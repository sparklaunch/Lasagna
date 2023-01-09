import HTMLFlipBook from "react-pageflip";
import Page from "./Page";

const Book = () => {
  const pages = [...Array(20).keys()];
  return (
    <HTMLFlipBook width={486} height={625}>
      {pages.map((page) => {
        return <Page name={page} />;
      })}
    </HTMLFlipBook>
  );
};

export default Book;
