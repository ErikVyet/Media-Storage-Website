import { Container } from "@mui/material";
import HeroSection from "../components/home/HeroSection";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import FeatureSection from "../components/home/FeatureSection";

function Home() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Container className={`min-h-screen h-fit max-h-max ${theme === "light" ? 'bg-zinc-100' : 'bg-neutral-950'}`} maxWidth={false}>
            <HeroSection />
            <FeatureSection />
        </Container>
    );
}

export default Home;