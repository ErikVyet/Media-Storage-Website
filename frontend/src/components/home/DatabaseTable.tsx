import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Stack, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Key } from "@mui/icons-material";
import { motion } from "motion/react";

type DatabaseTableProps = {
    header: string,
    data: {
        label: string,
        icon?: any,
        primary: boolean,
        foreign: boolean
    } []
}

function DatabaseTable({ header, data = [] }: DatabaseTableProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Table className={`flex-1/3 grow-0 shrink-0 ${theme === "light" ? 'bg-zinc-100' : 'bg-zinc-900'}`} component={motion.table} whileHover={{ borderColor: theme === "light" ? "black" : "darkgray" }} sx={{ border: 1, borderColor: "gray", '& .MuiTableCell-root': { borderColor: "gray" } }}>
            <TableHead>
                <TableRow>
                    <TableCell className={`text-center! text-xs! font-semibold! p-2.5! ${theme === "light" ? 'text-zinc-700!' : 'text-zinc-300!'}`} colSpan={2}>{header}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, index) => 
                    <TableRow sx={{ '&:last-child td': { border: 0 } }} key={index} component={motion.tr} initial={{ scale: 1 }} whileHover={{ scale: 0.9 }}>
                        <TableCell className={`text-xs! p-2.5! ${theme === "light" ? 'text-zinc-700!' : 'text-zinc-100!'}`}>{row.label}</TableCell>
                        <TableCell className="text-right! text-xs! py-0!">
                            <Stack className="justify-end" direction={"row"}>
                                {row.primary && <Key className="scale-60 text-yellow-400" />}
                                {row.foreign && <Key className="scale-60 text-zinc-400" />}
                                {row.icon}
                            </Stack>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

export default DatabaseTable;