import { Box, Container, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Check, Clear } from "@mui/icons-material";
import { motion } from "motion/react";

function DifferentiationSection() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const differences = [
        { feature: "Link Type", main: "Direct Raw URL", sub: "Redirect Landing Page" },
        { feature: "Image Quality", main: "100% Original", sub: "Automated Optimization" },
        { feature: "Developer Access", main: "Instant API Generation", sub: "Manual sharing links only" },
        { feature: "Workflow", main: "Minimal Effort", sub: "Multi-step clicking process" },
        { feature: "Integration", main: "Cross-platform Sync", sub: "Siloed mobile apps" },
        { feature: "Data Control", main: "PostgreSQL", sub: "Proprietary closed systems" }
    ]

    return (
        <Container className="min-h-screen h-screen max-h-max" component={Stack}>
            <Stack className="flex-3/10 h-full grow-0 shrink-0 justify-end items-center gap-2">
                <Typography className="text-blue-500 text-center" variant="h4" component={motion.span} initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Built and designed for everyone</Typography>
                <Typography className={`text-center ${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="h6" component={motion.span} initial={{ x: 10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Why choose this over a standard cloud drive?</Typography>
            </Stack>
            <Box className="flex-7/10 h-full grow-0 shrink-0 place-content-center">
                <Table className="w-9/10! justify-self-center" component={motion.table} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={`font-bold! w-1/3 ${theme === "light" ? 'text-zinc-700!' : 'text-zinc-300!'}`} align={"center"}>Feature</TableCell>
                            <TableCell className={`font-bold! w-1/3 ${theme === "light" ? 'text-zinc-700!' : 'text-zinc-300!'}`} align={"center"}>Vedia</TableCell>
                            <TableCell className={`font-bold! w-1/3 ${theme === "light" ? 'text-zinc-700!' : 'text-zinc-300!'}`} align={"center"}>Standard cloud storage</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {differences.map((difference, index) =>
                            <TableRow key={index}>
                                <TableCell className={` ${theme === "light" ? 'text-zinc-700!' : 'text-zinc-300!'}`} align={"center"}>{difference.feature}</TableCell>
                                <TableCell className={` ${theme === "light" ? 'text-zinc-700!' : 'text-zinc-300!'}`} align={"center"}><Check className="text-green-500"/> {difference.main}</TableCell>
                                <TableCell className={` ${theme === "light" ? 'text-zinc-700!' : 'text-zinc-300!'}`} align={"center"}><Clear className="text-red-500" /> {difference.sub}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Box>
        </Container>
    );
}

export default DifferentiationSection;