import { useContext, type RefObject } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { SouthEast } from "@mui/icons-material";
import OfficeCanvas from "../common/models/office/OfficeCanvas";

type HeroSectionProps = {
    linkSections: {
        title: string;
        ref: RefObject<HTMLDivElement>;
    } []
}

function HeroSection({ linkSections }: HeroSectionProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Container className="min-h-screen h-screen max-h-max" component={Stack} direction={"row"}>
            <Stack className="h-full flex-1/2 grow-0 shrink-0 items-center justify-center gap-5">
                <Stack className="w-full justify-center">
                    <Typography className="text-blue-600" variant="h3">Your memories</Typography>
                    <Typography className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="h3">are not data points</Typography>
                </Stack>
                <Typography className="text-zinc-500">We built this platform because we believe your personal photos and videos belong exclusively to you. No ad tracking, no public AI training—just blazing-fast cloud storage and flexible developer APIs.</Typography>
                <Stack className="flex-wrap gap-5" direction={"row"}>
                    {linkSections.map((section, index) =>
                        <Button className="bg-blue-600! normal-case!" variant="contained" endIcon={<SouthEast/>} key={index} onClick={() => section.ref.current.scrollIntoView({ behavior: "smooth" })}>{section.title}</Button>
                    )}
                </Stack>
            </Stack>
            <Box className="h-full flex-1/2 grow-0 shrink-0 place-content-center">
                <OfficeCanvas/>
            </Box>
        </Container>
    );
}

export default HeroSection;