import { useContext, useEffect, useRef, useState, type WheelEventHandler } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Container } from "@mui/material";
import HeroSection from "../components/about/HeroSection";
import OriginStorySection from "../components/about/OriginStorySection";
import ValueSection from "../components/about/ValueSection";
import ArchitectureSection from "../components/about/ArchitectureSection";
import TeamSection from "../components/about/TeamSection";
import CtaSection from "../components/common/CtaSection";

function About() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const heroSection = useRef<HTMLDivElement>(null!);
    const storySection = useRef<HTMLDivElement>(null!);
    const valueSection = useRef<HTMLDivElement>(null!);
    const architectureSection = useRef<HTMLDivElement>(null!);
    const teamSection = useRef<HTMLDivElement>(null!);
    const ctaSection = useRef<HTMLDivElement>(null!);

    const [activeSectionIndex, setActiveSectionIndex] = useState(-1);

    const sections = [
        { title: "The Origin Story", ref: storySection },
        { title: "Our Core Pillar", ref: valueSection },
        { title: "Architecture Transparency", ref: architectureSection },
        { title: "The Team", ref: teamSection },
    ];

    useEffect(() => {
        switch(activeSectionIndex) {
            case (-1): {
                heroSection.current.scrollIntoView({ behavior: "smooth" });
                break;
            }
            case (sections.length): {
                ctaSection.current.scrollIntoView({ behavior: "smooth" });
                break;
            }
            default: {
                sections[activeSectionIndex].ref.current.scrollIntoView({ behavior: "smooth" });
                break;
            }
        }
        if (activeSectionIndex >= -1 && activeSectionIndex < sections.length) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }, [activeSectionIndex]);
    
    const handleScrolling: WheelEventHandler<HTMLDivElement> = (_event) => {
        if (_event.deltaY <= -100) {
            setActiveSectionIndex((prev) => prev === -1 ? prev : prev - 1);
        }
        else {
            setActiveSectionIndex((prev) => prev === sections.length ? prev : prev + 1);
        }
    };

    return (
        <Container className={`min-h-screen h-fit max-h-max ${theme === "light" ? 'bg-zinc-100' : 'bg-neutral-950'}`} maxWidth={false} onWheel={handleScrolling}>
            <HeroSection ref={heroSection} linkSections={sections} setActiveSectionIndex={setActiveSectionIndex} />
            <OriginStorySection ref={storySection} />
            <ValueSection ref={valueSection} />
            <ArchitectureSection ref={architectureSection} />
            <TeamSection ref={teamSection} />
            <CtaSection ref={ctaSection} />
        </Container>
    );
}

export default About;