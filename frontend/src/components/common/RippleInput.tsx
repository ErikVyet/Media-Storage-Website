import { Box, Input, Stack } from "@mui/material";
import { motion } from "motion/react";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

type RippleInputProps = {
    disableRipple?: boolean,
    disableUnderline?: boolean
}

function RippleInput({ disableRipple = false, disableUnderline = false }: RippleInputProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const [isFocusing, setIsFocusing] = useState(false);

    return (
        <Stack className={`relative size-full ${disableUnderline ? '' : 'border-b'} ${theme === "light" ? 'border-zinc-700' : 'border-zinc-100'}`} direction={"row"}>
            <Input className={`${theme === "light" ? 'text-zinc-700!' : 'text-zinc-100!'}`} disableUnderline onFocus={() => setIsFocusing(true)} onBlur={() => setIsFocusing(false)} fullWidth />
            {!disableRipple && <Box className="absolute -bottom-px left-0 w-full border-b border-blue-500" component={motion.div} initial={{ scaleX: 0, originX: 0.5 }} animate={{ scaleX: isFocusing ? 1 : 0 }} transition={{ duration: 0.2 }} />}
        </Stack>
    );
}

export default RippleInput;