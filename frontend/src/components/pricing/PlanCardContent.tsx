import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { List, ListItem, ListItemText } from "@mui/material";
import { Check } from "@mui/icons-material";

type PlanCardContent = {
    title: string,
    contents: string[]
}

function PlanCardContent({ title, contents = [] }: PlanCardContent) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <List className="size-full">
            <ListItem className="px-0! pt-0!">
                <ListItemText className="text-zinc-500">{title}</ListItemText>
            </ListItem>
            {contents.map((content, index) =>
                <ListItem className="px-0!" key={index}>
                    <ListItemText className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`}>
                        <Check className="text-green-500"/> {content}
                    </ListItemText>
                </ListItem>
            )}
        </List>
    );
}

export default PlanCardContent;