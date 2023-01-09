import Book from "./components/Book";
import { BookContextProvider } from "./contexts/BookContext";
import LeftArrow from "./components/LeftArrow";
import RIghtArrow from "./components/RIghtArrow";
import { SoundContextProvider } from "./contexts/SoundContext";

const App = () => {
  return (
    <SoundContextProvider>
      <BookContextProvider>
        <div className={"bg-blue-300 h-[100vh] overflow-clip"}>
          <LeftArrow />
          <div className={"justify-center items-center flex h-full shadow-2xl"}>
            <Book />
          </div>
          <RIghtArrow />
        </div>
      </BookContextProvider>
    </SoundContextProvider>
  );
};

export default App;
