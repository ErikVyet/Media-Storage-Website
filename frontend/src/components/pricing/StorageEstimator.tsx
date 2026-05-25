import { Box, Container, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import EstimatorSlider from "./EstimatorSlider";
import EstimatorResultChart from "./EstimatorResultChart";
import { motion } from "motion/react";

function StorageEstimator() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const [photoCount, setPhotoCount] = useState(0);
    const [videoCount, setVideoCount] = useState(0);
    const [averagePhotoSize, setAveragePhotoSize] = useState(0);
    const [averageVideoSize, setAverageVideoSize] = useState(0);
    const [totalSize, setTotalSize] = useState(0);
    const [totalSizeLength, setTotalSizeLength] = useState(0);

    useEffect(() => {
        const photoSize = (photoCount * averagePhotoSize) / 1024;
        const videoSize = videoCount * averageVideoSize;
        setTotalSize(photoSize + videoSize);
        setTotalSizeLength(totalSize.toFixed(0).toString().length);
    }, [photoCount, videoCount, averagePhotoSize, averageVideoSize]);

    const freeStorageRange = [0, 5, 10, 15];
    const plusStorageRange = [0, 100, 200, 300, 400, 500];
    const proStorageRange = [0, 512, 1024, 1536, 2048];

    return (
        <Container className="min-h-screen max-h-max gap-8" maxWidth={false} component={Stack}>
            <Stack className="flex-[200px] grow-0 shrink-0 items-center justify-center gap-4">
                <Typography className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="h4" component={motion.span} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Media Storage Estimator</Typography>
                <Typography className="text-zinc-500 text-center" component={motion.span} initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Don't know which plan to decide? Use our media storage estimator to visualize easier</Typography>
            </Stack>
            <Box className="flex-[200px] px-10 grow-0 shrink-0 place-content-center">
                <EstimatorResultChart data={totalSize <= 15 ? freeStorageRange : totalSize <= 500 ? plusStorageRange : proStorageRange} value={totalSize} unit={"GB"}/>
            </Box>
            <Stack className={`flex-[100px] grow-0 shrink-0 items-center justify-evenly border-b ${theme === "light" ? 'border-zinc-300' : 'border-zinc-700'}`} direction={"row"}>
                <Stack className="flex-1/2 items-center justify-center" component={motion.span} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    <Typography className="text-zinc-500">Total Size</Typography>
                    <Typography className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`}>{totalSize.toPrecision(totalSizeLength + 2)} GB</Typography>
                </Stack>
                <Stack className="flex-1/2 items-center justify-center gap-1" component={motion.span} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    <Typography className="text-zinc-500">Recommended Plan</Typography>
                    <Typography className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`}>{totalSize <= 15 && averagePhotoSize <= 100 && averageVideoSize * 1024 <= 100 ? "Free" : totalSize <= 500 && averageVideoSize < 2  ? "Plus" : "Pro"}</Typography>
                </Stack>
            </Stack>
            <Stack className="flex-[100px] grow-0 shrink-0 items-center justify-center flex-wrap gap-8" direction={"row"} component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                <EstimatorSlider label="Photos" min={0} max={2000} step={10} shiftStep={10} value={photoCount} setValue={setPhotoCount} />
                <EstimatorSlider label="APS (MB)" hint="Average Photo Size" min={0} max={200} step={5} shiftStep={5} value={averagePhotoSize} setValue={setAveragePhotoSize} />
                <EstimatorSlider label="Videos" min={0} max={200} step={5} shiftStep={5} value={videoCount} setValue={setVideoCount} />
                <EstimatorSlider label="AVS (GB)" hint="Average Video Size" min={0} max={50} step={1} shiftStep={1} value={averageVideoSize} setValue={setAverageVideoSize} />
            </Stack>
        </Container>
    );
}

export default StorageEstimator;