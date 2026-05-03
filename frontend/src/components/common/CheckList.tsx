import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { Check } from "@mui/icons-material";
import { motion } from "motion/react";

type CheckListProps = {
    className?: string,
    direction?: "row" | "column",
    items: string[]
}

function CheckList({ className = "", direction = "row", items }: CheckListProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <List className={className} component={Stack} direction={direction} disablePadding>
            {items.map((item, index) =>
                <ListItem disablePadding key={index}>
                    <ListItemIcon className="place-content-center">
                        <Check className={`text-sm! ${theme === "light" ? 'text-zinc-700' : 'text-zinc-200'}`} component={motion.svg} initial={{ opacity: 0, originX: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                    </ListItemIcon>
                    <ListItemText disableTypography>
                        <Typography className={`text-sm! whitespace-nowrap ${theme === "light" ? 'text-zinc-700' : 'text-zinc-200'}`} component={motion.span} initial={{ opacity: 0, originX: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>{item}</Typography>
                    </ListItemText>
                </ListItem>
            )}
        </List>
    );
}

export default CheckList;