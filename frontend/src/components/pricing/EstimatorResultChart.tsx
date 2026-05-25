import { Box, Tooltip, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { motion } from "motion/react";

type EstimatorResultChartProps = {
    value: number,
    unit?: string,
    data: number[]
}

function EstimatorResultChart({ value, unit, data }: EstimatorResultChartProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Box className="size-full relative border-l border-b border-zinc-500 justify-self-center place-content-end" component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <Box className="size-full overflow-hidden">
                <Tooltip title={`Your photos and videos will take up ${value.toPrecision(value.toFixed(0).toString().length + 2)} ${unit ?? ''} of storage`} placement="bottom" followCursor>
                    <Box className={`relative h-full bg-green-500 border-r-2 border-dashed ${theme === "light" ? 'border-zinc-700' : 'border-zinc-300'} transition-[width] duration-200`} sx={{ width: `${value / data[data.length - 1] * 100}%` }}/>
                </Tooltip>
            </Box>
            {data.map((d, index) =>
                <Box key={index}>
                    <Box className={`absolute bottom-0 h-full ${index === 0 ? '' : 'border-l'} border-zinc-600 border-dashed`} sx={{ left: `${d / data[data.length - 1] * 100}%` }}/>
                    <Typography className="text-sm! whitespace-nowrap absolute bottom-0 translate-y-6 text-zinc-500" sx={{ left: `${d / data[data.length - 1] * 100}%` }}>{d} {index === data.length - 1 ? unit ?? '' : ''}</Typography>
                </Box>
            )}
        </Box>
    );
}

export default EstimatorResultChart;