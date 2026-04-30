import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function MainLayout() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Container className={`min-h-screen p-0! ${theme === "light" ? '' : 'bg-neutral-950'}`} maxWidth={false}>
            <Header/>
            <Outlet/>
            <Footer/>
        </Container>
    );
}

export default MainLayout;