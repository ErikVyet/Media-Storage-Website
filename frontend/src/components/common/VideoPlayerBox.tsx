import { Box, Stack } from "@mui/material";
import { useContext, type MouseEvent } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { motion } from "motion/react";

type VideoPlayerBoxProps = {
    src: string
}

function VideoPlayerBox({ src }: VideoPlayerBoxProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const handleContextMenu = (_event: MouseEvent<HTMLVideoElement>) => _event.preventDefault();

    return (
        <Box className="relative size-full border border-zinc-500 rounded-3xl place-content-center" component={motion.div} initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <Box className={`w-19/20 h-9/10 border border-zinc-500 rounded-3xl justify-self-center place-content-center text-center ${theme === "light" ? 'bg-zinc-300' : 'bg-zinc-900'}`} component={"video"} muted loop autoPlay draggable={false} controls={false} controlsList="nodownload" disablePictureInPicture onContextMenu={handleContextMenu}>
                <source src={src} type={"video/mp4"} />
                This video is not supported by your browser
            </Box>
            <Stack className="w-1/8 h-1/20 absolute top-0 left-0 justify-center items-center gap-3" direction={"row"}>
                <Box className="size-3 rounded-full bg-green-500" />
                <Box className="size-3 rounded-full bg-yellow-500" />
                <Box className="size-3 rounded-full bg-red-500" />
            </Stack>
        </Box>
    );
}

export default VideoPlayerBox;