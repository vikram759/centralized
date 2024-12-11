"use client";

import React, { useState, ReactNode, createContext, useContext } from "react";
import { SessionProvider } from "next-auth/react";

interface StringContextType {
  count: string;
  setCount: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with a default value of undefined
export const StringContext = createContext<StringContextType | undefined>(undefined);

interface SessionWrapperProps {
  children: ReactNode;
}

const SessionWrapper: React.FC<SessionWrapperProps> = ({ children }) => {
  const [count, setCount] = useState<string>("");

  return (
    <SessionProvider>
      <StringContext.Provider value={{ count, setCount }}>
        {children}
      </StringContext.Provider>
    </SessionProvider>
  );
};

export default SessionWrapper;
