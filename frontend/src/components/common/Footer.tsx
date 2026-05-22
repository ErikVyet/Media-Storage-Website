import { Box, Button, Container, IconButton, InputBase, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import StatusBox from "./StatusBox";
import Banner from "./Banner";
import { Facebook, GitHub, Instagram, Reddit, X, YouTube } from "@mui/icons-material";
import LinkList from "./LinkList";

function Footer() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const socials = [
        { icon: <X/>, url: "/" },
        { icon: <GitHub />, url: "/" },
        { icon: <Facebook />, url: "/" },
        { icon: <YouTube />, url: "/" },
        { icon: <Instagram />, url: "/" },
        { icon: <Reddit />, url: "/" }
    ];
    const linkList = [
        { 
            header: "Page", 
            links: [ 
                { label: "About us", url: "/about" },
                { label: "Guide", url: "/guide" },
                { label: "Community", url: "/community" },
                { label: "Download", url: "/download" },
                { label: "Pricing", url: "/pricing" }
            ] 
        },
        {
            header: "Stack",
            links: [
                { label: "React", url: "https://react.dev/" },
                { label: "Vite", url: "https://vite.dev/" },
                { label: "Tailwind", url: "https://tailwindcss.com/" },
                { label: "Framer Motion", url: "https://motion.dev/" },
                { label: "Material UI", url: "https://mui.com/" },
                { label: "TanStack", url: "https://tanstack.com/" }
            ]
        },
        {
            header: "Project",
            links: [
                { label: "Phone Shop Website", url: "https://github.com/ErikVyet/Phone-Shop-Website" },
                { label: "Mail Manager Website", url: "https://github.com/ErikVyet/Mail-Manager-Website" },
                { label: "Online Book Store Website", url: "https://github.com/ErikVyet/Online-Book-Store-Website" },
                { label: "License Plate Recognition", url: "https://github.com/ErikVyet/License-Plate-Recognition" }
            ]
        }
    ];

    return (
        <Container className={`min-h-96 h-96 max-h-max w-full m-0! p-0! border-t ${theme === "light" ? 'bg-neutral-100 border-zinc-300' : 'bg-zinc-950 border-zinc-900'}`} maxWidth={false} component={Stack}>
            <Stack className="flex-1/5 grow-0 shrink-0 justify-center items-center gap-2" direction={"row"}>
                <Typography className={`text-sm! ${theme === "light" ? '' : 'text-zinc-300'}`}>System status:</Typography>
                <StatusBox status={"maintenance"} />
            </Stack>
            <Stack className="flex-4/5 grow-0 shrink-0" direction={"row"}>
                <Stack className="flex-3/10 grow-0 shrink-0 justify-center items-center gap-3">
                    <Banner />
                    <Stack className="w-9/10 justify-center items-center gap-1" direction={"row"}>
                        {socials.map((social, index) =>
                            <IconButton className={`text-zinc-500! ${theme === "light" ? 'hover:text-zinc-700!' : 'hover:text-zinc-300!'} transition-colors! duration-200!`} href={social.url} key={index}>
                                {social.icon}
                            </IconButton>
                        )}
                    </Stack>
                    <Stack className="w-7/10 justify-center items-start gap-1.5">
                        <Typography className="text-sm! text-zinc-500">Get updates and news from Vedia.</Typography>
                        <InputBase className={`px-2 text-sm! rounded-sm border border-zinc-600 ${theme === "light" ? 'bg-zinc-200 text-zinc-700!' : 'bg-zinc-900 text-zinc-300!'}`} placeholder="Your email" fullWidth/>
                        <Button className="text-xs! normal-case! bg-blue-600!" variant="contained">Subscribe</Button>
                    </Stack>
                </Stack>
                <Stack className="flex-7/10 grow-0 shrink-0" direction={"row"}>
                    {linkList.map((list, index) =>
                        <Box className="flex-1/3 h-full grow-0 shrink-0" key={index}>
                            <LinkList header={list.header} links={list.links} />
                        </Box>
                    )}
                </Stack>
            </Stack>
        </Container>
    );
}

export default Footer;