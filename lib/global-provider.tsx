import { createContext, useContext, ReactNode, useState } from "react";
import { User } from "@/types/user.types";

interface GlobalContextType {
  user: User | null;
  setUser: (value: User | null) => void;
  isLogged: boolean;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const isLogged = !!user;
  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        isLogged,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobalContext must be used within a GlobalProvider");

  return context;
};
