import { useContext, useRef } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Container } from "@mui/material";
import HeroSection from "../components/about/HeroSection";

function About() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const storySection = useRef<HTMLDivElement>(null!);
    const valueSection = useRef<HTMLDivElement>(null!);
    const architectureSection = useRef<HTMLDivElement>(null!);
    const teamSection = useRef<HTMLDivElement>(null!);

    const sections = [
        { title: "The Origin Story", ref: storySection },
        { title: "Our Core Pillar", ref: valueSection },
        { title: "Architecture Transparency", ref: architectureSection },
        { title: "The Team", ref: teamSection },
    ];

    return (
        <Container className={`min-h-screen h-fit max-h-max ${theme === "light" ? 'bg-zinc-100' : 'bg-neutral-950'}`} maxWidth={false}>
            <HeroSection linkSections={sections} />
        </Container>
    );
}

export default About;