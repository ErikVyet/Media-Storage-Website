import { Box, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type PlanButtonProps = {
    plan: "free" | "plus" | "pro"
}

function PlanButton({ plan }: PlanButtonProps) {
    return (
        <Tooltip title={"Subscription"}>
            <Box className={`relative px-3.5 py-1 border rounded-sm cursor-pointer ${plan === "free" ? 'border-yellow-800' : plan === "plus" ? 'border-green-800' : 'border-blue-600'}`} component={Link} to={"/pricing"}>
                <Box className={`absolute top-0 left-0 -z-10 size-full opacity-20 ${plan === "free" ? 'bg-yellow-400' : plan === "plus" ? 'bg-green-400': 'bg-blue-500'}`}/>
                <Typography className={`text-xs! capitalize ${plan === "free" ? 'text-yellow-500' : plan === "plus" ? 'text-green-500' : 'text-blue-600'}`}>{plan}</Typography>
            </Box>
        </Tooltip>
    );
}

export default PlanButton;