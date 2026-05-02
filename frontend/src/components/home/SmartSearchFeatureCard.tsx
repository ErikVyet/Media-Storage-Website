import { Box, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { motion } from "motion/react";
import { ImageSearch, Search } from "@mui/icons-material";

function SmartSearchFeatureCard() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const [count, setCount] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => setCount((prev) => prev + 1), 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <Stack className={`size-full p-6 gap-2.5 rounded-xl border overflow-hidden ${theme === "light" ? 'bg-zinc-200 border-zinc-300 hover:border-zinc-400' : 'bg-zinc-900 border-neutral-800 hover:border-neutral-700'} duration-300`} onPointerEnter={() => setIsHovering(true)} onPointerLeave={() => setIsHovering(false)}>
            <Stack className="gap-2.5 items-center" direction={"row"}>
                <ImageSearch className={`aspect-square ${theme === "light" ? 'invert-20' : 'invert-90'}`}/>
                <Typography className={`whitespace-nowrap overflow-hidden border-zinc-100 ${theme === "light" ? 'text-zinc-700' : 'text-zinc-200'}`} component={motion.span} initial={{ width: 0, originX: 0 }} whileInView={{ width: "fit-content" }} transition={{ duration: 1 }} viewport={{ once: true }}>Smart Search</Typography>
            </Stack>
            <Typography className="text-sm! w-full leading-relaxed text-zinc-500" component={motion.span} initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><span className={`text-sm! ${theme === "light" ? 'text-zinc-900' : 'text-zinc-200'}`}>Find any moment, instantly.</span><br/>AI-powered semantic search that understands your photos as well as you do.</Typography>
            <Box className="flex-1 w-full overflow-hidden place-content-center">
                <Stack className={`relative w-9/10 px-4 py-2 rounded-full justify-between justify-self-center border ${theme === "light" ? `${isHovering ? 'border-zinc-400' : 'border-zinc-300'}` : `${isHovering ? 'border-neutral-700' : 'border-neutral-800'}`}`} direction={"row"} component={motion.div} initial={{ opacity: 0, scale: 1 }} whileInView={{ opacity: 1 }} animate={{ scale: isHovering ? 1.1 : 1 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
                    <Typography className={`text-zinc-500 ${count % 2 === 0 ? 'border-r' : 'border-none'} border-zinc-500 whitespace-nowrap overflow-hidden`} component={motion.span} initial={{ width: 0 }} animate={{ width: isHovering ? "fit-content" : 0 }} transition={{ duration: 0.8, ease: "linear" }}>My pet photos</Typography>
                    <Search className={`aspect-square ${theme === "light" ? `${isHovering ? 'text-zinc-400' : 'text-zinc-300'}` : `${isHovering ? 'text-zinc-700' : 'text-zinc-800'}`}`}/>
                </Stack>
            </Box>
        </Stack>
    );
}

export default SmartSearchFeatureCard;