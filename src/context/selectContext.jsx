import React, { useState } from 'react';

export const SelectContext = React.createContext();

const SelectProvider = ({ children }) => {
  const [selectValue, setSelectValue] = useState("default");
  return (
    <SelectContext.Provider value={[selectValue, setSelectValue]}>
      {children}
    </SelectContext.Provider>
  );
};

export default SelectProvider