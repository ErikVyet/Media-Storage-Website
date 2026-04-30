import { Container } from "@mui/material";
import HeroSection from "../components/home/HeroSection";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Home() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Container className={`min-h-screen h-fit ${theme === "light" ? 'bg-zinc-100' : 'bg-neutral-950'}`} maxWidth={false}>
            <HeroSection />
        </Container>
    );
}

export default Home;