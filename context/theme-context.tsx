"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
  description: boolean;
  setDescription: (value: boolean) => void;
  zimoji: boolean;
  setZimoji: (value: boolean) => void;
}

// ✅ Ensure the default context is undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ✅ Custom Hook for consuming the context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("❌ useTheme must be used inside a ThemeProvider!");
  }
  return context;
}

// ✅ ThemeProvider Component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [description, setDescription] = useState<boolean>(false);
  const [zimoji, setZimoji] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    const defaultTheme = savedTheme || "light";
    setTheme(defaultTheme);
    document.documentElement.classList.toggle("dark", defaultTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        description,
        setDescription,
        zimoji,
        setZimoji,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// ✅ Export ThemeContext for debugging (not recommended for direct use)
export { ThemeContext };



