import { Box, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { motion } from "motion/react";
import { Storage } from "@mui/icons-material";
import MediaMarquee from "./MediaMarquee";

function StorageFeatureCard() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const [isHovering, setIsHovering] = useState(false);

    return (
        <Stack className={`size-full p-6 gap-2.5 rounded-xl border overflow-hidden ${theme === "light" ? 'bg-zinc-200 border-zinc-300 hover:border-zinc-400' : 'bg-zinc-900 border-neutral-800 hover:border-neutral-700'} duration-300`} onPointerEnter={() => setIsHovering(true)} onPointerLeave={() => setIsHovering(false)}>
            <Stack className="gap-2.5 items-center" direction={"row"}>
                <Storage className={`aspect-square ${theme === "light" ? 'invert-20' : 'invert-90'}`}/>
                <Typography className={`whitespace-nowrap overflow-hidden border-zinc-100 ${theme === "light" ? 'text-zinc-700' : 'text-zinc-200'}`} component={motion.span} initial={{ width: 0, originX: 0 }} whileInView={{ width: "fit-content" }} transition={{ duration: 1 }} viewport={{ once: true }}>Storage</Typography>
            </Stack>
            <Typography className="text-sm! w-full leading-relaxed text-zinc-500" component={motion.span} initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><span className={`text-sm! ${theme === "light" ? 'text-zinc-900' : 'text-zinc-200'}`}>Your memories in full resolution.</span><br/>We store your original files exactly as they were captured, with zero compression or quality loss.</Typography>
            <Box className="relative flex-1 w-full place-content-center">
                <Box className="absolute -left-5 top-1/4 h-15 w-full justify-self-center" component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    <MediaMarquee duration={20} active={isHovering} direction="left" />
                </Box>
            </Box>
        </Stack>
    );
}

export default StorageFeatureCard;