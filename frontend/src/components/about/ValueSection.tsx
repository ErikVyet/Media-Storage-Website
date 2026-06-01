import { Container } from "@mui/material";
import { useContext, type Ref } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

type ValueSectionProps = {
    ref?: Ref<HTMLDivElement>
}

function ValueSection({ ref }: ValueSectionProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Container className={`min-h-screen h-screen max-h-max ${theme === "light" ? 'bg-zinc-100' : 'bg-neutral-950'}`} maxWidth={false} ref={ref}>

        </Container>
    );
}

export default ValueSection;