import { InsertPhotoOutlined, VideocamOutlined } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { motion } from "motion/react";

type MediaMarqueeProps = {
    duration?: number,
    active?: boolean,
    direction?: "left" | "right"
}

function MediaMarquee({ duration = 20, active = true, direction = "left" }: MediaMarqueeProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Stack className="size-full" direction={"row"}>
            {Array.from({ length: 2 }).map((_, indexMain) =>
                <Stack className="w-fit h-full px-1 gap-2" direction={"row"} component={motion.div} initial={{ x: 0 }} animate={{ x: active ? (direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"]) : [] }} transition={{ duration: duration, ease: "linear", repeat: Infinity }} key={indexMain}>
                    {Array.from({ length: 6 }).map((_, indexSub) =>
                        <Box className={`aspect-square border rounded-sm p-3 ${theme === "light" ? 'border-zinc-300 bg-neutral-200 hover:border-zinc-400 hover:bg-neutral-300' : 'border-zinc-800 bg-neutral-900 hover:border-zinc-700 hover:bg-neutral-800'} duration-200`} key={indexSub}>
                            {indexSub % 2 === 0 && (
                                <InsertPhotoOutlined className="size-full! aspect-square text-zinc-500!" />
                            )}
                            {indexSub % 2 !== 0 && (
                                <VideocamOutlined className="size-full! aspect-square text-zinc-500!" />
                            )}
                        </Box>
                    )}
                </Stack>
            )}
        </Stack>
    );
}

export default MediaMarquee;