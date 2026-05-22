import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import PlanCardContent from "./PlanCardContent";

type PlanCardProps = {
    header: string,
    subheader: string,
    price: number,
    buttonContent: string,
    title: string,
    contents: string[],
    isPopular?: boolean
}

function PlanCard({ header, subheader, price, buttonContent, title, contents, isPopular = false }: PlanCardProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Stack className={`flex-3/10 min-h-9/10 grow-0 shrink-0 p-5 gap-4 border rounded-xl ${theme === "light" ? 'bg-zinc-200 border-zinc-300 hover:border-zinc-400' : 'bg-zinc-900 border-neutral-800 hover:border-neutral-700'} duration-300`}>
            <Stack className="gap-3 flex-[240px] grow-0 shrink-0">
                <Stack className="items-center justify-between gap-2" direction={"row"}>
                    <Typography className={`capitalize ${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="h5">{header}</Typography>
                    {isPopular && (<Typography className={`text-xs! px-3 py-0.5 rounded-md ${theme === "light" ? 'bg-zinc-700 text-zinc-100' : 'bg-zinc-300 text-zinc-900'}`}>Most Popular</Typography>)}
                </Stack>
                <Typography className="flex-1/5 grow-0 shrink-0 text-zinc-500 text-sm!">{subheader}</Typography>
                <Button className="w-2/3 place-self-center normal-case! bg-blue-600! hover:opacity-80 transition-opacity! duration-200!" variant="contained">{buttonContent}</Button>
                <Stack className="w-full flex-1 shrink-0 items-center justify-center gap-2" direction={"row"}>
                    <Typography className={`font-mono! justify-self-center ${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="h4">${price}</Typography>
                    <Typography className="text-zinc-500">/</Typography>
                    <Typography className="text-zinc-500">month</Typography>
                </Stack>
            </Stack>
            <Divider className={`${theme === "light" ? 'bg-zinc-300' : 'bg-neutral-700'}`}/>
            <Box className="flex-[400px]">
                <PlanCardContent title={title} contents={contents}/>
            </Box>
        </Stack>
    );
}

export default PlanCard;