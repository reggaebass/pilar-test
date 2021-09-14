import React, { useState } from 'react';

export const TabContext = React.createContext();


const TabProvider = ({ children }) => {
  const [tab, setTab] = useState("home");
  return (
    <TabContext.Provider value={[tab, setTab]}>
      {children}
    </TabContext.Provider>
  )
};

export default TabProvider;