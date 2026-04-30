import { Search } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import RippleInput from "./RippleInput";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function SearchBox() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Stack className="size-full justify-center items-center" direction={"row"}>
            <Box className="flex-2/3 grow-0 shrink-0">
                <RippleInput />
            </Box>
            <IconButton className={`aspect-square ${theme === "light" ? 'hover:bg-zinc-200!' : 'hover:bg-zinc-900!'}`}>
                <Search className={`${theme === "light" ? 'text-zinc-700!' : 'text-zinc-100!'}`}/>
            </IconButton>
        </Stack>
    );
}

export default SearchBox;