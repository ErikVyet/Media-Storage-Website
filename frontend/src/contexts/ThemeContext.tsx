import { createContext, type Dispatch, type SetStateAction } from "react";

export const ThemeContext = createContext<{
    theme: "light" | "dark",
    setTheme: Dispatch<SetStateAction<"light" | "dark">>
} | null>(null);