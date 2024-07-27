// theme-context.js
import { createContext, useContext } from "react";

const ThemeProviderContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

export default ThemeProviderContext;
