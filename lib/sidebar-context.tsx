"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextType {
  hideSidebar: boolean;
  setHideSidebar: (hide: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType>({
  hideSidebar: false,
  setHideSidebar: () => {},
});

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [hideSidebar, setHideSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={{ hideSidebar, setHideSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
