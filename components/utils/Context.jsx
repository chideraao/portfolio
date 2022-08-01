import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = (props) => {
  const [show, setShow] = useState(false);

  return (
    <SidebarContext.Provider value={[show, setShow]}>
      {props.children}
    </SidebarContext.Provider>
  );
};
