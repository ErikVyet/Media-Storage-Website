import { Box, Typography } from "@mui/material";

type StatusBoxProps = {
    status: "online" | "moderate" | "maintenance"
}

function StatusBox({ status }: StatusBoxProps) {
    return (
        <Box className={`relative px-3.5 py-1 border rounded-sm ${status === "online" ? 'border-green-800' : status === "moderate" ? 'border-yellow-800' : 'border-red-800'}`}>
            <Box className={`absolute top-0 left-0 size-full opacity-10 ${status === "online" ? 'bg-green-400' : status === "moderate" ? 'bg-yellow-400' : 'bg-red-500'}`} />
            <Typography className={`text-xs! capitalize ${status === "online" ? 'text-green-500' : status === "moderate" ? 'text-yellow-500' : 'text-red-600'}`}>{status}</Typography>
        </Box>
    );
}

export default StatusBox;