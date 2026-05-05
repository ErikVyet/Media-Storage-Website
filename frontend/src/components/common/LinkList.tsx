import { List, ListItem, ListItemButton, ListItemText, Stack } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

type LinkListProps = {
    header?: string,
    links?: {
        label: string,
        url: string
    } [],
    direction?: "horizontal" | "vertical"
}

function LinkList({ header = "", links, direction = "vertical" }: LinkListProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <List className="size-full" component={Stack} direction={direction === "vertical" ? "column" : "row"}>
            <ListItem>
                <ListItemText className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`}>{header}</ListItemText>
            </ListItem>
            {links.map((link, index) =>
                <ListItem key={index}>
                    <ListItemButton className={`grow-0! shrink-0! text-sm! text-zinc-500! p-0! ${theme === "light" ? 'hover:text-zinc-700!' : 'hover:text-zinc-300!'} transition-colors! duration-200!`} href={link.url} disableRipple>{link.label}</ListItemButton>
                </ListItem>
            )}
        </List>
    );
}

export default LinkList;