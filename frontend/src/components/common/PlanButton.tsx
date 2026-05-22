import { Box, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Plan } from "../../enums/Plan";


type PlanButtonProps = {
    plan: Plan
}

function PlanButton({ plan }: PlanButtonProps) {
    return (
        <Tooltip title={"Subscription"}>
            <Box className={`relative px-3.5 py-1 border rounded-sm cursor-pointer ${plan === Plan.Free ? 'border-yellow-800' : plan === Plan.Plus ? 'border-green-800' : 'border-blue-600'}`} component={Link} to={"/pricing"} draggable={false}>
                <Box className={`absolute top-0 left-0 -z-10 size-full opacity-20 ${plan === Plan.Free ? 'bg-yellow-400' : plan === Plan.Plus ? 'bg-green-400': 'bg-blue-500'}`}/>
                <Typography className={`text-xs! capitalize ${plan === Plan.Free ? 'text-yellow-500' : plan === Plan.Plus ? 'text-green-500' : 'text-blue-600'}`}>{plan}</Typography>
            </Box>
        </Tooltip>
    );
}

export default PlanButton;