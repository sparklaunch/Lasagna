import HTMLFlipBook from "react-pageflip";

const Book = () => {
  return (
    <HTMLFlipBook width={300} height={500} size={"stretch"}>
      <div>Halo</div>
      <div>Hola</div>
      <div>Helo</div>
    </HTMLFlipBook>
  );
};

export default Book;
