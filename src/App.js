import Book from "./components/Book";
import { BookContextProvider } from "./contexts/BookContext";
import LeftArrow from "./components/LeftArrow";
import RightArrow from "./components/RightArrow";

const App = () => {
  return (
    <BookContextProvider>
      <div className={"bg-blue-300 h-[100vh] overflow-clip"}>
        <LeftArrow />
        <div className={"justify-center items-center flex h-full shadow-2xl"}>
          <Book />
        </div>
        <RightArrow />
      </div>
    </BookContextProvider>
  );
};

export default App;
