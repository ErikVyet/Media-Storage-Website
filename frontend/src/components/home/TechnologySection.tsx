import { Box, Container, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Icon from "../common/Icon";
import { Link } from "react-router-dom";

function TechnologySection() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => setCount((prev) => prev + 1), 600);
        return () => clearInterval(interval);
    }, []);

    const commonLineAnimationTimer = 0.4;
    const uniqueLineAnimationTimer = 0.3;
    const frameworks = [
        { name: "React", icon: <Icon className="size-15 aspect-square" src={"/src/assets/images/react.svg"} />, url: "https://react.dev/" },
        { name: "Vite", icon: <Icon className="size-20 aspect-square" src={"/src/assets/images/vite.svg"} />, url: "https://vite.dev/" },
        { name: "Tailwind", icon: <Icon className="size-18 aspect-square" src={"/src/assets/images/tailwind.svg"} />, url: "https://tailwindcss.com/" },
        { name: "Framer Motion", icon: <Icon className="size-12 aspect-square" src={"/src/assets/images/motion.svg"} />, url: "https://motion.dev/" },
        { name: "Material UI", icon: <Icon className="size-18 aspect-square" src={"/src/assets/images/mui.png"} />, url: "https://mui.com/" },
        { name: "TanStack", icon: <Icon className="size-14 aspect-auto" src={"/src/assets/images/tanstack.png"} />, url: "https://tanstack.com/" }
    ];

    return (
        <Container className="min-h-screen max-h-max justify-center items-center" component={Stack} direction={"row"}>
            <Stack className="flex-1/2 grow-0 shrink-0 justify-center items-center gap-1.5 overflow-hidden" component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                <Typography className="text-zinc-500" variant="h4">Vedia was made possible by</Typography>
                <Stack className="w-fit justify-center items-center" direction={"row"}>
                    <Typography className={`relative overflow-hidden whitespace-nowrap ${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="h4" component={motion.span} initial={{ width: "fit-content" }} animate={{ width: isHovering ? "0%" : "fit-content" }} transition={{ duration: commonLineAnimationTimer, delay: isHovering ? 0 : isAnimating ? 0 : uniqueLineAnimationTimer, ease: "linear" }} onAnimationStart={() => setIsAnimating(true)} onAnimationComplete={() => setIsAnimating(false)}>
                        these frameworks
                        <Box className={`absolute top-0 right-0 h-full border-r ${count % 2 === 0 ? `${theme === "light" ? 'border-zinc-100' : 'border-zinc-950'}` : 'border-zinc-500'}`}/>
                    </Typography>
                    <Typography className={`relative overflow-hidden whitespace-nowrap ${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="h4" component={motion.span} initial={{ width: "0%" }} animate={{ width: isHovering && !isAnimating ? "fit-content" : "0%" }} transition={{ duration: uniqueLineAnimationTimer, ease: "linear" }}>
                        {frameworks[index].name}
                        <Box className={`absolute top-0 right-0 h-full border-r ${count % 2 === 0 ? `${theme === "light" ? 'border-zinc-100' : 'border-zinc-950'}` : 'border-zinc-500'}`}/>
                    </Typography>
                </Stack>
            </Stack>
            <Stack className="flex-1/2 grow-0 shrink-0 justify-center items-center flex-wrap gap-20" direction={"row"} component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                {frameworks.map((framework, index) =>
                    <Link className="cursor-pointer rounded-full" to={framework.url} target={"_blank"} draggable={false} key={index} onPointerEnter={() => { setIndex(index); setIsHovering(true); }} onPointerLeave={() => setIsHovering(false)}>
                        {framework.icon}
                    </Link>
                )}
            </Stack>
        </Container>
    );
}

export default TechnologySection;