import { Box, Container, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import VideoPlayerBox from "../common/VideoPlayerBox";
import CheckList from "../common/CheckList";
import { motion } from "motion/react";

function ExampleSection() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const lines = [
        "Full Controls",
        "Direct Access",
        "Smart Search",
        "Mobile Sync",
    ];

    return (
        <Container className="min-h-[150vh] h-[150vh] max-h-max" component={Stack}>
            <Stack className="flex-3/10 grow-0 shrink-0 justify-center items-center gap-6">
                <Stack className="justify-center items-center gap-2">
                    <Typography className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="h4" component={motion.span} initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Save and manage your memories</Typography>
                    <Typography className="text-blue-500" variant="h4" component={motion.span} initial={{ x: 10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>with minimal efforts</Typography>
                </Stack>
                <Box className="w-full place-content-center">
                    <CheckList className="justify-center justify-self-center gap-5" items={lines} />
                </Box>
            </Stack>
            <Box className="flex-7/10 grow-0 shrink-0 justify-center items-center">
                <VideoPlayerBox src={"/src/assets/videos/example.mp4"} />
            </Box>
        </Container>
    );
}

export default ExampleSection;