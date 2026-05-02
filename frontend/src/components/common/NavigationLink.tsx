import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

type NavigationLinkProps = {
    label: string,
    url: string
}

function NavigationLink({ label, url }: NavigationLinkProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const [isHovering, setIsHovering] = useState(false);

    return (
        <Box className="relative" onPointerEnter={() => setIsHovering(true)} onPointerLeave={() => setIsHovering(false)}>
            <Link className={`font-semibold! ${theme === "light" ? 'text-zinc-800' : 'text-zinc-200'}`} to={url} draggable={false}>{label}</Link>
            <Box className={`absolute rounded-full w-full -bottom-1 border-b ${theme === "light" ? 'border-zinc-800' : 'border-zinc-200'}`} component={motion.div} initial={{ scaleX: 0, originX: 0.5 }} animate={{ scaleX: isHovering ? 1 : 0 }} transition={{ duration: 0.2 }} />
        </Box>
    );
}

export default NavigationLink;