import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

type RelationshipLineProps = {
    startRelation: "one" | "many",
    endRelation: "one" | "many"
}

function RelationshipLine({ startRelation, endRelation }: RelationshipLineProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Box className={`relative flex-1/4 grow-0 shrink-0 border-b border-zinc-500 ${theme === "light" ? 'hover:border-zinc-950' : 'hover:border-zinc-400'}`}>
            <Typography className={`absolute -top-4.5 left-2 text-xs! ${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`}>{startRelation === "one" ? 1 : "n"}</Typography>
            <Typography className={`absolute -top-4.5 right-2 text-xs! ${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`}>{endRelation === "one" ? 1 : "n"}</Typography>
        </Box>
    );
}

export default RelationshipLine;