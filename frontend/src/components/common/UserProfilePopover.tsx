import { Button, List, ListItem, ListItemButton, Popover, Stack, Switch, Tooltip, Typography } from "@mui/material";
import { useContext, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DarkModeOutlined, EditOutlined, LightModeOutlined, LogoutOutlined } from "@mui/icons-material";

type UserProfilePopoverProps = {
    guest?: boolean,
    anchorElement: HTMLElement | null,
    setAnchorElement: Dispatch<SetStateAction<HTMLElement | null>>,
    horizontal: "left" | "right" | "center",
    vertical: "center" | "bottom" | "top"
}

function UserProfilePopover({ guest = true, anchorElement, setAnchorElement, horizontal, vertical }: UserProfilePopoverProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme, setTheme } = themeContext;

    const handleChangeTheme = (_event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const themeValue = checked ? "dark" : "light";
        localStorage.setItem("theme", themeValue);
        setTheme(themeValue);
    }
    
    const profileItems = [
        { label: "Personalize", icon: <EditOutlined className="scale-90"/>, url: "" },
        { label: "Logout", icon: <LogoutOutlined className="scale-90"/>, url: "" }
    ];

    return (
        <Popover open={Boolean(anchorElement)} onClose={() => setAnchorElement(null)} anchorEl={anchorElement} anchorOrigin={{ horizontal, vertical }} disableScrollLock>
            <List className="w-45">
                <ListItem className="gap-2 justify-between!" component={Stack} direction={"row"}>
                    <Stack className="justify-center items-center gap-1" direction={"row"}>
                        <Typography className="text-sm! capitalize text-zinc-700">Theme</Typography>
                        {theme === "light" ? <LightModeOutlined className="scale-80 text-zinc-700" /> : <DarkModeOutlined className="scale-80 text-zinc-700" />}
                    </Stack>
                    <Tooltip title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
                        <Switch checked={theme === "dark"} size="small" onChange={handleChangeTheme} />
                    </Tooltip>
                </ListItem>
                {!guest && (
                    <>
                        {profileItems.map((item, index) =>
                            <ListItemButton className="py-1!" href={item.url} key={index}>
                                <Button className="px-0! normal-case! text-sm! text-zinc-700! justify-start!" color="inherit" endIcon={item.icon} fullWidth disabled>{item.label}</Button>
                            </ListItemButton>
                        )}
                    </>
                )}
            </List>
        </Popover>
    );
}

export default UserProfilePopover;