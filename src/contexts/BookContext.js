import { createContext, useRef } from "react";

const BookContext = createContext(null);

export const BookContextProvider = ({ children }) => {
  const book = useRef();
  return (
    <BookContext.Provider value={{ book }}>{children}</BookContext.Provider>
  );
};

export default BookContext;
