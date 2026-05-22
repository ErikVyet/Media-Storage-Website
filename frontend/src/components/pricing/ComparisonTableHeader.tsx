import { Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

type ComparisonTableHeaderProps = {
    header: string,
    price: number,
    buttonContent: string,
    buttonUrl?: string
}

function ComparisonTableHeader({ header, price, buttonContent, buttonUrl = "/" }: ComparisonTableHeaderProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;
    
    return (
        <Stack className="size-full px-4 gap-2">
            <Stack className="items-center justify-between" direction={"row"}>
                <Typography className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="h6">{header}</Typography>
                <Stack className="items-center justify-center gap-1" direction={"row"}>
                    <Typography className="font-mono!" variant="h6">${price}</Typography>
                    <Typography className="text-sm!">/</Typography>
                    <Typography className="text-sm!">month</Typography>
                </Stack>
            </Stack>
            <Button className="bg-blue-600! normal-case! text-xs!" href={buttonUrl} variant="contained" fullWidth>{buttonContent}</Button>
        </Stack>
    );
}

export default ComparisonTableHeader;