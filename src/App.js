import Book from "./components/Book";

const App = () => {
  return (
    <div className={"bg-blue-300 h-[100vh] overflow-clip"}>
      <div className={"justify-center items-center flex h-full"}>
        <Book />
      </div>
      <div></div>
    </div>
  );
};

export default App;
