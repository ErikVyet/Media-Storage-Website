import { Box } from "@mui/material";

type IconProps = {
    className?: string,
    src: string
}

function Icon({ className = "", src }: IconProps) {
    return (
        <Box className={className} component={"img"} src={src} draggable={false} />
    );
}

export default Icon;