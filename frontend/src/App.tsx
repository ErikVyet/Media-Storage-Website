import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

function App() {
    const localTheme: "dark" | "light" = localStorage.getItem("theme") as ("dark" | "light");

    const [theme, setTheme] = useState<"light" | "dark">(localTheme ?? "dark");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/pricing" element={<Pricing/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    );
}

export default App;