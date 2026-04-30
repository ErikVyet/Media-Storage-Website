import { createContext, type RefObject } from "react";

export const HomeContext = createContext<{
    heroRef: RefObject<HTMLDivElement>
} | null>(null);