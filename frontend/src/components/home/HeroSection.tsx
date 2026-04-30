import { Box, Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ArrowRightAltOutlined } from "@mui/icons-material";
import { HomeContext } from "../../contexts/HomeContext";
import { motion } from "motion/react";

function HeroSection() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const homeContext = useContext(HomeContext);
    if (!homeContext) return null;
    const { heroRef } = homeContext;

    return (
        <Stack className="w-full h-screen justify-center items-center gap-6" ref={heroRef}>
            <Box className="h-16"/>
            <Stack className="text-center">
                <Typography className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="h2" component={motion.span} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Your life in pixels</Typography>
                <Typography className="text-blue-500" variant="h2" component={motion.span} initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Preserved forever</Typography>
            </Stack>
            <Typography className={`w-1/2 grow-0 shrink-0 text-center ${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="subtitle1" component={motion.span} initial={{ opacity: 0, originX: 0.5 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                From first steps to graduation, every memory deserves a home. Our secure vault doesn't just store your photos—it protects your legacy, keeping your stories safe, organized, and ready to rediscover for years to come.
            </Typography>
            <Button className="bg-blue-600! normal-case!" href={""} variant="contained" endIcon={<ArrowRightAltOutlined/>}>Start Your Gallery</Button>
        </Stack>
    );
}

export default HeroSection;