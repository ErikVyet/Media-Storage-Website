import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

function Banner() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Stack className="size-full justify-center items-center gap-2" direction={"row"} component={Link} to={"/"}>
            <Box className="aspect-square grow-0 shrink-0">
                <Box className="aspect-square object-contain size-6" component={"img"} src={"/src/assets/images/banner-icon.png"}/>
            </Box>
            <Typography className={`font-bold! font-mono! ${theme === "light" ? 'text-zinc-700' : 'text-zinc-100'}`} variant="h6" sx={{ letterSpacing: 0.8 }}>Vedia</Typography>
        </Stack>
    );
}

export default Banner;