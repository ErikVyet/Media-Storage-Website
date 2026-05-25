import { Box, Collapse, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ExpandMore } from "@mui/icons-material";
import { motion } from "motion/react";

type FaqBoxProps = {
    question: string;
    answer: string;
}

function FaqBox({ question, answer }: FaqBoxProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const [expanded, setExpanded] = useState(false);

    return (
        <Box className={`border-b ${theme === "light" ? 'border-zinc-300' : 'border-zinc-800'}`} component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} onClick={() => setExpanded(!expanded)}>
            <Stack className="items-center justify-between py-5.5" direction={"row"}>
                <Typography className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`}>{question}</Typography>
                <ExpandMore className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'} ${expanded ? 'rotate-180' : ''} transition-transform! duration-200`}/>
            </Stack>
            <Collapse in={expanded} timeout="auto">
                <Typography className={`pb-7 text-zinc-500`}>{answer}</Typography>
            </Collapse>
        </Box>
    );
}

export default FaqBox;