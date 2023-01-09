import Book from "./components/Book";
import { BookContextProvider } from "./contexts/BookContext";
import LeftArrow from "./components/LeftArrow";

const App = () => {
  return (
    <BookContextProvider>
      <div className={"bg-blue-300 h-[100vh] overflow-clip"}>
        <LeftArrow />
        <div className={"justify-center items-center flex h-full"}>
          <Book />
        </div>
      </div>
    </BookContextProvider>
  );
};

export default App;
