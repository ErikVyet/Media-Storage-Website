import { Box, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import DatabaseTables from "./DatabaseTables";
import Icon from "../common/Icon";
import { Check } from "@mui/icons-material";
import { motion } from "motion/react";

function DatabaseFeatureCard() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const trustLines = [
        "Zero data loss by design",
        "Battle-tested at massive scale",
        "Rock-solid consistency"
    ];

    return (
        <Stack className={`size-full rounded-xl border ${theme === "light" ? 'bg-zinc-200 border-zinc-300 hover:border-zinc-400' : 'bg-zinc-900 border-neutral-800 hover:border-neutral-700'} duration-300`} direction={"row"}>
            <Stack className="flex-[40%] h-full grow-0 shrink-0 p-6 gap-2.5">
                <Stack className="grow-0 shrink-0 gap-2.5 items-center" direction={"row"}>
                    <Icon className={`aspect-square size-6 ${theme === "light" ? 'invert-20' : 'invert-90'}`} src={"/src/assets/images/database.png"}/>
                    <Typography className={`whitespace-nowrap overflow-hidden border-zinc-100 ${theme === "light" ? 'text-zinc-700' : 'text-zinc-200'}`} component={motion.span} initial={{ width: 0, originX: 0 }} whileInView={{ width: "fit-content" }} transition={{ duration: 1 }} viewport={{ once: true }}>Postgres Database</Typography>
                </Stack>
                <Stack className="flex-1 shrink-0 justify-between">
                    <Typography className="text-sm! w-full leading-relaxed text-zinc-500" component={motion.span} initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Every photo is stored within <span className={`${theme === "light" ? 'text-zinc-900' : 'text-zinc-200'}`}>Postgres database</span>, the world's most trusted relational database.</Typography>
                    <List className="w-full" disablePadding>
                        {trustLines.map((line, index) =>
                            <ListItem disablePadding key={index}>
                                <ListItemIcon className="place-content-center">
                                    <Check className={`text-sm! ${theme === "light" ? 'text-zinc-700' : 'text-zinc-200'}`} component={motion.svg} initial={{ opacity: 0, originX: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}/>
                                </ListItemIcon>
                                <ListItemText disableTypography>
                                    <Typography className={`text-sm! ${theme === "light" ? 'text-zinc-700' : 'text-zinc-200'}`} component={motion.span} initial={{ opacity: 0, originX: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>{line}</Typography>
                                </ListItemText>
                            </ListItem>
                        )}
                    </List>
                </Stack>
            </Stack>
            <Box className="flex-[60%] h-full grow-0 shrink-0 overflow-hidden">
                <DatabaseTables />
            </Box>
        </Stack>
    );
}

export default DatabaseFeatureCard;