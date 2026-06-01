import { Box, Container, Stack, Typography } from "@mui/material";
import { useContext, type Ref } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { motion } from "motion/react";
import GalaxyCanvas from "../common/models/galaxy/GalaxyCanvas";
import AtomCanvas from "../common/models/atom/AtomCanvas";

type OriginStorySectionProps = {
    ref: Ref<HTMLDivElement>
}

function OriginStorySection({ ref }: OriginStorySectionProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Container ref={ref} className="min-h-screen h-screen max-h-max" component={Stack} direction={"row"}>
            <Box className="h-full flex-1/2 grow-0 shrink-0 place-content-center">
                <Box className="size-100 border border-zinc-500 rounded-full justify-self-center overflow-hidden">
                    {theme === "light" ? <AtomCanvas/> : <GalaxyCanvas/>}
                </Box>
            </Box>
            <Stack className="h-full flex-1/2 grow-0 shrink-0 items-center justify-center gap-14">
                <Typography className="text-blue-600 whitespace-nowrap overflow-hidden" variant="h3" component={motion.span} initial={{ width: "0%" }} whileInView={{ width: "fit-content" }} transition={{ duration: 1 }} viewport={{ once: true }}>The Origin Story</Typography>
                <Stack className="items-center justify-center gap-4">
                    <Typography className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} component={motion.span} initial={{ x: 10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>The Backstory: <span className="text-zinc-500">Share the frustration of mainstream alternatives getting bloated, expensive, or overly invasive.</span></Typography>
                    <Typography className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} component={motion.span} initial={{ x: 10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>The Solution: <span className="text-zinc-500">A lean, high-performance web and mobile application designed to do two things incredibly well: give families a beautiful, private space for their galleries, and give developers a clean, programmable way to access their media asset infrastructure.</span></Typography>
                </Stack>
            </Stack>
        </Container>
    )
}

export default OriginStorySection;