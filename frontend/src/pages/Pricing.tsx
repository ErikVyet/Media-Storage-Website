import { Container } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import PlanSection from "../components/pricing/PlanSection";
import CompareSection from "../components/pricing/CompareSection";
import StorageEstimator from "../components/pricing/StorageEstimator";
import CtaSection from "../components/common/CtaSection";

function Pricing() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Container className={`min-h-screen h-fit max-h-max ${theme === "light" ? 'bg-zinc-100' : 'bg-neutral-950'}`} maxWidth={false}>
            <PlanSection/>
            <StorageEstimator/>
            <CompareSection/>
            <CtaSection/>
        </Container>
    );
}

export default Pricing;