import { Button, Container, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function CtaSection() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Container className="min-h-screen h-screen max-h-max justify-center items-center gap-10" component={Stack}>
            <Typography className={`text-center leading-snug! ${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="h3">Ready to manage your <span className="text-blue-500">memories</span><br/>with zero fiction?</Typography>
            <Stack className="justify-center items-center gap-5" direction={"row"}>
                <Button className="bg-blue-600! normal-case! whitespace-nowrap" variant="contained">Get started</Button>
                <Button className="bg-transparent! border border-blue-500! text-blue-500! normal-case! whitespace-nowrap" variant="outlined">Get mobile app</Button>
            </Stack>
        </Container>
    );
}

export default CtaSection;