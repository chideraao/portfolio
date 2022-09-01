import { createContext, useState } from "react";

export const SidebarContext = createContext();
export const IndexContext = createContext();

export const SidebarProvider = (props) => {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <SidebarContext.Provider value={[show, setShow]}>
      <IndexContext.Provider value={[index, setIndex]}>
        {props.children}
      </IndexContext.Provider>
    </SidebarContext.Provider>
  );
};
