import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Bolt, Check, Remove, Storage } from "@mui/icons-material";
import ComparisonTableHeader from "./ComparisonTableHeader";

function CompareSection() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const tableHeaders = [
        { width: "23%", content: <ComparisonTableHeader header={"Free"} price={0} buttonContent="Start for Free" />},
        { width: "23%", content: <ComparisonTableHeader header={"Plus"} price={5} buttonContent="Upgrade now" />},
        { width: "23%", content: <ComparisonTableHeader header={"Pro"} price={15} buttonContent="Upgrade now" />}
    ];
    const tableContents = [
        {
            isHeader: true,
            criteria: <Typography className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`}><Storage className={`size-8! text-zinc-100! rounded-md p-1.5 mr-2.5 bg-blue-600`}/> Storage</Typography>,
            free: "",
            plus: "",
            pro: ""
        },
        {
            isHeader: false,
            criteria: "Included Storage",
            free: "15 GB",
            plus: "500 GB",
            pro: "2 TB"
        },
        {
            isHeader: false,
            criteria: "Overage Rate",
            free: "Strict limit (No overages)",
            plus: "$0.05 per extra GB",
            pro: "$0.03 per extra GB"
        },
        {
            isHeader: false,
            criteria: "Upload Quality",
            free: "Original quality",
            plus: "Original quality",
            pro: "Original quality"
        },
        {
            isHeader: false,
            criteria: "Max File Size",
            free: "100 MB per file",
            plus: "2 GB per file",
            pro: "50 GB per file"
        },
        {
            isHeader: false,
            criteria: "Media Support",
            free: "Standard formats (JPEG, PNG, MP4)",
            plus: "Standard formats",
            pro: "RAW images, 4K/8K uncompressed video"
        },
        {
            isHeader: false,
            criteria: "AI Smart Search",
            free: <Remove className={`size-5! p-1 rounded-full ${theme === "light" ? 'bg-zinc-400 text-zinc-100' : 'bg-zinc-600 text-zinc-900'}`}/>,
            plus: <Check className={`size-5! p-1 rounded-full bg-green-500 ${theme === "light" ? 'text-zinc-100' : 'text-zinc-900'}`}/>,
            pro: <Check className={`size-5! p-1 rounded-full bg-green-500 ${theme === "light" ? 'text-zinc-100' : 'text-zinc-900'}`}/>
        },
        {
            isHeader: false,
            criteria: "Family Vault",
            free: <Remove className={`size-5! p-1 rounded-full ${theme === "light" ? 'bg-zinc-400 text-zinc-100' : 'bg-zinc-600 text-zinc-900'}`}/>,
            plus: "Up to 5 members",
            pro: "Up to 5 members"
        },
        {
            isHeader: false,
            criteria: "Advanced Editing",
            free: <Remove className={`size-5! p-1 rounded-full ${theme === "light" ? 'bg-zinc-400 text-zinc-100' : 'bg-zinc-600 text-zinc-900'}`}/>,
            plus: <Check className={`size-5! p-1 rounded-full bg-green-500 ${theme === "light" ? 'text-zinc-100' : 'text-zinc-900'}`}/>,
            pro: <Check className={`size-5! p-1 rounded-full bg-green-500 ${theme === "light" ? 'text-zinc-100' : 'text-zinc-900'}`}/>
        },
        {
            isHeader: true,
            criteria: <Typography className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`}><Bolt className={`size-8! text-zinc-100! rounded-md p-1.5 mr-2.5 bg-blue-600`}/> Developer & API Infrastructure</Typography>,
            free: "",
            plus: "",
            pro: ""
        },
        {
            isHeader: false,
            criteria: "API Media Delivery",
            free: "Up to 20 photos",
            plus: "Up to 100 photos",
            pro: "Up to 500 photos"
        },
        {
            isHeader: false,
            criteria: "Bandwidth",
            free: "5 GB / month",
            plus: "50 GB / month",
            pro: "500 GB / month"
        },
        {
            isHeader: false,
            criteria: "Link Customization",
            free: "Standard shared links",
            plus: "Standard shared links",
            pro: "Password-protected & expiring links"
        },
        {
            isHeader: false,
            criteria: "Backups",
            free: <Remove className={`size-5! p-1 rounded-full ${theme === "light" ? 'bg-zinc-400 text-zinc-100' : 'bg-zinc-600 text-zinc-900'}`}/>,
            plus: "Daily cloud sync",
            pro: "Automated offsite backups + 7-day retention"
        },
        {
            isHeader: false,
            criteria: "Account Pausing",
            free: "After 1 week of inactivity",
            plus: "Never",
            pro: "Never"
        },
        {
            isHeader: false,
            criteria: "Support",
            free: "Community Support",
            plus: "Priority Email",
            pro: "VIP Chat Support"
        }
    ];

    return (
        <Container className="min-h-screen max-h-max">
            <Box className="h-40 place-content-end">
                <Typography className={`h-2/5 justify-self-center ${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="h4">Comparison</Typography>
            </Box>
            <TableContainer>
                <Table sx={{ '& .MuiTableCell-root': { borderColor: "gray" }, '& .MuiTableCell-head': { borderBottom: "none" } }}>
                    <TableHead>
                        <TableRow>
                            <TableCell width={"31%"} className="bg-transparent! text-zinc-500!" align="center"></TableCell>
                            {tableHeaders.map((header, index) =>
                                <TableCell width={header.width} className="bg-transparent! text-zinc-500!" align="center" key={index}>
                                    {header.content}
                                </TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableContents.map((content, index) =>
                            <TableRow key={index}>
                                <TableCell className={`text-xs! ${theme === "light" ? 'text-zinc-700!' : 'text-zinc-300!'}`}>{content.criteria}</TableCell>
                                <TableCell className={`text-xs! ${theme === "light" ? 'text-zinc-700!' : 'text-zinc-300!'}`}>{content.free}</TableCell>
                                <TableCell className={`text-xs! ${theme === "light" ? 'text-zinc-700!' : 'text-zinc-300!'}`}>{content.plus}</TableCell>
                                <TableCell className={`text-xs! ${theme === "light" ? 'text-zinc-700!' : 'text-zinc-300!'}`}>{content.pro}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default CompareSection;