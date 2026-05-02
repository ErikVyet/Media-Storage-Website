import { Box } from "@mui/material";

type DatabaseIconProps = {
    className?: string
}

function DatabaseIcon({ className = "" }: DatabaseIconProps) {
    return (
        <Box className={className} component={"img"} src={"/src/assets/images/database.png"} draggable={false} />
    );
}

export default DatabaseIcon;