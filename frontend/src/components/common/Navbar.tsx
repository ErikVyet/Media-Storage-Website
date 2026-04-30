import { Box, Toolbar } from "@mui/material";
import NavigationLink from "./NavigationLink";
import SearchBox from "./SearchBox";

type NavbarProps = {
    links: {
        label: string,
        url: string
    } [],
    enableSearchBox?: boolean
}

function Navbar({ links, enableSearchBox = false }: NavbarProps) {
    return (
        <Toolbar className="size-full gap-10" disableGutters>
            {links.map((link, index) => 
                <Box key={index}>
                    <NavigationLink label={link.label} url={link.url} />
                </Box>
            )}
            {enableSearchBox && <SearchBox />}
        </Toolbar>
    );
}

export default Navbar;