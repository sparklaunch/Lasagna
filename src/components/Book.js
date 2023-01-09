import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import { useContext } from "react";
import BookContext from "../contexts/BookContext";

const Book = () => {
  const { book } = useContext(BookContext);
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
