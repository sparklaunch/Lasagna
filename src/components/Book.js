import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import { useRef } from "react";

const Book = () => {
  const book = useRef();
  const pages = [...Array(20).keys()];
  return (
    <HTMLFlipBook width={486} height={625} useMouseEvents={false} ref={book}>
      {pages.map((page) => {
        return <Page name={page} />;
      })}
    </HTMLFlipBook>
  );
};

export default Book;
