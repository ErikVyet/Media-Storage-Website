import { Button, Container, Stack, Typography } from "@mui/material";
import { useContext, type Ref } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { motion } from "motion/react";

type CtaSectionProps = {
    ref?: Ref<HTMLDivElement>
}

function CtaSection({ ref }: CtaSectionProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Container className="min-h-screen h-screen max-h-max justify-center items-center gap-10" component={Stack} ref={ref}>
            <Typography className={`text-center leading-snug! ${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="h3" component={motion.span} initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Ready to manage your <span className="text-blue-500">memories</span><br/>with zero fiction?</Typography>
            <Stack className="justify-center items-center gap-5" direction={"row"} component={motion.div} initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} viewport={{ once: true }}>
                <Button className="bg-blue-600! normal-case! whitespace-nowrap" variant="contained">Get started</Button>
                <Button className="bg-transparent! border border-blue-500! text-blue-500! normal-case! whitespace-nowrap" variant="outlined">Get mobile app</Button>
            </Stack>
        </Container>
    );
}

export default CtaSection;