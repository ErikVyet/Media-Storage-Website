import { Box, InputBase, Slider, Stack, Tooltip, Typography } from "@mui/material";
import { useContext, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HelpOutlineOutlined } from "@mui/icons-material";

type EstimatorSliderProps = {
    label: string,
    min?: number,
    max?: number,
    step?: number,
    shiftStep?: number,
    hint?: string,
    value: number,
    setValue: Dispatch<SetStateAction<number>>,
}

function EstimatorSlider({ label, min = 0, max = 10, step = 1, shiftStep = 10, hint, value, setValue }: EstimatorSliderProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const handleInputChange = (_event: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(_event.target.value);
        if (newValue >= min && newValue <= max) {
            setValue(newValue);
        }
    }

    return (
        <Stack className="flex-9/20 grow-0 shrink-0 items-center justify-center gap-5" direction={"row"}>
            <Stack className="flex-[95px] grow-0 shrink-0 items-center justify-center gap-2" direction={"row"}>
                <Typography className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`}>{label}</Typography>
                {hint && (
                    <Tooltip title={hint} placement="top">
                        <HelpOutlineOutlined className={`size-4! ${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`}/>
                    </Tooltip>
                )}
            </Stack>
            <Slider className="flex-2" size="small" min={min} max={max} step={step} value={value} shiftStep={shiftStep} onChange={(_event: Event, value: number) => setValue(value)}/>
            <Box className={`flex-[80px] grow-0 shrink-0 py-1.5 text-center place-content-center rounded-xl ${theme === "light" ? 'bg-zinc-300' : 'bg-zinc-900'}`}>
                <InputBase className={`w-fit! font-mono! ${theme === "light" ? 'text-zinc-700!' : 'text-zinc-300!'}`} type={"number"} value={value} onChange={handleInputChange} sx={{ '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': { WebkitAppearance: "none", margin: 0 }, '& input[type=number]': { MozAppearance: 'textfield' } }} slotProps={{ input: { style: { textAlign: "center" } } }}/>
            </Box>
        </Stack>
    );
}

export default EstimatorSlider;