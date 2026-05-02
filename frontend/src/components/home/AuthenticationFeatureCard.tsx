import { Box, Grid, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LockOutlined } from "@mui/icons-material";
import { motion } from "motion/react";

function AuthenticationFeatureCard() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const [isHovering, setIsHovering] = useState(false);

    return (
        <Stack className={`relative size-full p-6 gap-2.5 rounded-xl border overflow-hidden ${theme === "light" ? 'bg-zinc-200 border-zinc-300 hover:border-zinc-400' : 'bg-zinc-900 border-neutral-800 hover:border-neutral-700'} duration-300`} onPointerEnter={() => setIsHovering(true)} onPointerLeave={() => setIsHovering(false)}>
            <Stack className="gap-2.5 items-center" direction={"row"}>
                <LockOutlined className={`aspect-square ${theme === "light" ? 'invert-20' : 'invert-90'}`}/>
                <Typography className={`whitespace-nowrap overflow-hidden border-zinc-100 ${theme === "light" ? 'text-zinc-700' : 'text-zinc-200'}`} component={motion.span} initial={{ width: 0, originX: 0 }} whileInView={{ width: "fit-content" }} transition={{ duration: 1 }} viewport={{ once: true }}>Authentication</Typography>
            </Stack>
            <Typography className="text-sm! w-full leading-relaxed text-zinc-500" component={motion.span} initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><span className={`text-sm! ${theme === "light" ? 'text-zinc-900' : 'text-zinc-200'}`}>Your memories, strictly private.</span><br/>Secure every photo with enterprise-grade identity management and Row Level Security.</Typography>
            <Grid className="absolute bottom-10 left-0 w-full scale-150" container spacing={1} component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                {Array.from({ length: 2 }).map((_, index) => 
                    <Grid size={6} key={index}>
                        <Box className={`size-full rounded-sm border p-2 text-center ${theme === "light" ? 'border-zinc-300' : 'border-neutral-800'}`}>
                            <Typography className="size-full place-content-center text-xs! text-zinc-500 font-mono!">erik2508@gmail.com</Typography>
                        </Box>
                    </Grid>
                )}
                {Array.from({ length: 2 }).map((_, index) => 
                    <Grid size={6} key={index}>
                        <Box className={`size-full rounded-sm border p-2 text-center ${theme === "light" ? `${isHovering ? 'border-zinc-400 bg-zinc-300' : 'border-zinc-300'}` : `${isHovering ? 'border-neutral-700 bg-zinc-800' : 'border-neutral-800'}`} duration-300`}>
                            <Typography className={`size-full place-content-center text-xs! text-zinc-500 font-mono! ${isHovering ? '' : 'blur-xs'} duration-300`}>••••••••••••</Typography>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Stack>
    );
}

export default AuthenticationFeatureCard;