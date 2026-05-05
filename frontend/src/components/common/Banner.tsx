import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HomeContext } from "../../contexts/HomeContext";

function Banner() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const homeContext = useContext(HomeContext);
    if (!homeContext) return null;
    const { heroRef } = homeContext;

    return (
        <Stack className="size-fit justify-center items-center gap-2 cursor-pointer" direction={"row"} onClick={() => heroRef.current.scrollIntoView({ behavior: "smooth" })}>
            <Box className="aspect-square grow-0 shrink-0">
                <Box className="aspect-square object-contain size-6" component={"img"} src={"/src/assets/images/banner-icon.png"} draggable={false}/>
            </Box>
            <Typography className={`font-bold! font-mono! ${theme === "light" ? 'text-zinc-700' : 'text-zinc-100'}`} variant="h6" sx={{ letterSpacing: 0.8 }}>Vedia</Typography>
        </Stack>
    );
}

export default Banner;