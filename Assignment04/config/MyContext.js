// MyContext.js
import React, { createContext, useState } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const updateItem = (index, updatedItem) => {
    setItems(items.map((item, i) => (i === index ? updatedItem : item)));
  };

  return (
    <MyContext.Provider value={{ items, updateItem }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
