import { createContext } from "react";

// ==============================================
type AppContextType = {
  name: string;
  setName: (name: string) => void;
};

export const AppContext = createContext<AppContextType>({
  name: "",
  setName: (name: string) => {}
});

// ==============================================
