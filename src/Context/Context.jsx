import { createContext, useEffect, useState } from "react";

// Create Context
export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Initialize theme based on system preference if not in localStorage
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (!localStorage.getItem("theme")) {
      setTheme(prefersDarkMode ? "dark" : "light");
    }
  }, []);

  // Apply theme and save to localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const value = {
    theme,
    setTheme,
    data,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
