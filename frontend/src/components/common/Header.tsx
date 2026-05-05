import { AppBar, Avatar, Box, IconButton, Stack, Tooltip } from "@mui/material";
import { Person } from "@mui/icons-material";
import { useContext, useState, type MouseEvent } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Banner from "./Banner";
import UserProfilePopover from "./UserProfilePopover";
import PlanButton from "./PlanButton";
import Navbar from "./Navbar";

function Header() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleOpenMenu = (_event: MouseEvent<HTMLElement | null>) => setAnchorEl(_event.currentTarget);

    const guest: boolean = false;
    const navigations = [
        { label: "About", url: "/about" },
        { label: "Guide", url: "/guide" },
        { label: "Community", url: "/community" },
        { label: "Download", url : "/download" },
        { label: "Pricing", url: "/pricing" }
    ];

    return (
        <AppBar className={`w-full h-18 p-0! border-b ${theme === "light" ? 'bg-zinc-100!' : 'bg-zinc-950! border-zinc-900'}`} color="primary">
            <Stack className="size-full items-center" direction={"row"}>
                <Box className="flex-3/20 h-full grow-0 shrink-0 place-content-center">
                    <Box className="w-fit h-2/3 rounded-sm px-2 justify-self-center place-content-center">
                        <Banner/>
                    </Box>
                </Box>
                <Box className="flex-18/25 h-full grow-0 shrink-0">
                    <Navbar links={navigations} enableSearchBox/>
                </Box>
                <Stack className="flex-auto h-full justify-evenly items-center" direction={"row"}>
                    <Tooltip title={guest ? "Guest" : "Profile"}>
                        {guest ? 
                            <IconButton className={`${theme === "light" ? '' : 'hover:bg-zinc-900!'}`} onClick={handleOpenMenu}>
                                <Person className={`${theme === "light" ? 'text-zinc-600' : 'text-zinc-100'}`}/>
                            </IconButton> :
                            <Avatar className="size-8! border border-zinc-400 cursor-pointer justify-self-center" src={"/src/assets/images/duck.jpg"} onClick={handleOpenMenu}/>
                        }
                    </Tooltip>
                    <PlanButton plan={"pro"}/>
                    <UserProfilePopover guest={guest} anchorElement={anchorEl} setAnchorElement={setAnchorEl} horizontal="left" vertical="bottom"/>
                </Stack>
            </Stack>
        </AppBar>
    );
}

export default Header;