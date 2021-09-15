import React, { useState, createContext } from 'react';

export const SelectContext = createContext();

const SelectProvider = ({ children }) => {
  const [selectValue, setSelectValue] = useState("default");
  const [tab, setTab] = useState("home")
  const [result, setResult] = useState([])
  const value = { select: [selectValue, setSelectValue], tabs: [tab, setTab], formResult: [result, setResult]};
  return (
    <SelectContext.Provider value={value}>
      {children}
    </SelectContext.Provider>
  );
};

export default SelectProvider