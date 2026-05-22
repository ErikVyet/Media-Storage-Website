import { Container } from "@mui/material";
import HeroSection from "../components/home/HeroSection";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import FeatureSection from "../components/home/FeatureSection";
import TechnologySection from "../components/home/TechnologySection";
import ExampleSection from "../components/home/ExampleSection";
import DifferentiationSection from "../components/home/DifferentiationSection";
import CtaSection from "../components/common/CtaSection";

function Home() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Container className={`min-h-screen h-fit max-h-max ${theme === "light" ? 'bg-zinc-100' : 'bg-neutral-950'}`} maxWidth={false}>
            <HeroSection />
            <FeatureSection />
            <ExampleSection />
            <DifferentiationSection />
            <TechnologySection />
            <CtaSection />
        </Container>
    );
}

export default Home;