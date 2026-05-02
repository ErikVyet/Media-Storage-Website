import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import { Api, Collections, Key, PersonOutlined } from "@mui/icons-material";
import DatabaseIcon from "../common/DatabaseIcon";

function DataApiFeatureCard() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const keyAnimationTimer = 3.5; // 3.5s or 3s and 500ms
    const dataAnimationTimer = 3.5; // 3.5s or 3s and 500ms
    
    const [isAnimating, setIsAnimating] = useState(true);
    const [isAnimating2, setIsAnimating2] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => 
            setIsAnimating(true), 
            (keyAnimationTimer + dataAnimationTimer) * 1000
        );
        return () => clearInterval(interval);
    }, [isAnimating]);

    return (
        <Stack className={`size-full p-6 gap-2.5 rounded-xl border overflow-hidden ${theme === "light" ? 'bg-zinc-200 border-zinc-300 hover:border-zinc-400' : 'bg-zinc-900 border-neutral-800 hover:border-neutral-700'} duration-300`}>
            <Stack className="gap-2.5 items-center" direction={"row"}>
                <Api className={`aspect-square ${theme === "light" ? 'invert-20' : 'invert-90'}`}/>
                <Typography className={`whitespace-nowrap overflow-hidden border-zinc-100 ${theme === "light" ? 'text-zinc-700' : 'text-zinc-200'}`} component={motion.span} initial={{ width: 0, originX: 0 }} whileInView={{ width: "fit-content" }} transition={{ duration: 1 }} viewport={{ once: true }}>Data APIs</Typography>
            </Stack>
            <Typography className="text-sm! w-full leading-relaxed text-zinc-500" component={motion.span} initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><span className={`text-sm! ${theme === "light" ? 'text-zinc-900' : 'text-zinc-200'}`}>Safe and scalable photo links.</span><br/>Serve your images securely with signed URLs and tokens that prevent unauthorized hotlinking.</Typography>
            <Box className="flex-1 w-full place-content-center">
                <Stack className="relative w-full h-3/5 justify-center items-center gap-2" direction={"row"}>
                    <PersonOutlined className={`scale-120 aspect-square text-zinc-500`}/>
                    <Box className="relative flex-2/3 grow-0 shrink-0 border border-dashed border-zinc-500">
                        <Key className={`absolute left-0 -top-3 rounded-sm aspect-square text-yellow-400 ${theme === "light" ? 'bg-zinc-200' : 'bg-neutral-900'} ${isAnimating ? 'visible' : 'invisible'}`} component={motion.svg} initial={{ left: "0%" }} animate={{ left: isAnimating ? "90%" : "0%" }} transition={{ duration: isAnimating ? keyAnimationTimer : 0, ease: "linear" }} onAnimationComplete={() => { setIsAnimating(false); setIsAnimating2(true); }}/>
                        <Collections className={`absolute right-0 -top-3 rounded-sm aspect-square text-zinc-500 ${theme === "light" ? 'bg-zinc-200' : 'bg-neutral-900'} ${!isAnimating && isAnimating2 ? 'visible' : 'invisible'}`} component={motion.svg} initial={{ right: "0%" }} animate={{ right: !isAnimating && isAnimating2 ? "90%" : "0%" }} transition={{ duration: isAnimating2 ? dataAnimationTimer : 0, ease: "linear" }} onAnimationComplete={() => setIsAnimating2(false)}/>
                    </Box>
                    <DatabaseIcon className="size-7 aspect-square invert-50" />
                </Stack>
            </Box>
        </Stack>
    );
}

export default DataApiFeatureCard;