import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Plan } from "../../enums/Plan";
import PlanCard from "./PlanCard";
import { South } from "@mui/icons-material";
import { motion } from "motion/react";

type PlanSectionProps = {
    compareSectionRef: React.RefObject<HTMLDivElement>;
}

function PlanSection({ compareSectionRef }: PlanSectionProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const plans = [
        {
            header: Plan.Free.toString(),
            subheader: "Perfect for casual users and checking out the platform.",
            price: 0,
            buttonContent: "Start for Free",
            title: "Get started with:",
            contents: [
                '15 GB secure cloud storage',
                'Original quality photo & video uploads',
                'Standard search (date and location)',
                'Web and mobile app access',
                'Shared link creation for albums',
                'Create API urls up to 20 photos'
            ],
            isPopular: false
        },
        {
            header: Plan.Plus.toString(),
            subheader: "For families and photography enthusiasts needing extra room.",
            price: 5,
            buttonContent: "Upgrade now",
            title: "Everything in the Free Plan, plus:",
            contents: [
                "500 GB total cloud storage",
                "AI Smart Search (by objects, faces, and text in photos)",
                "Shared Family Vault (up to 5 family members)",
                "Advanced photo editing tools in-app",
                "Priority upload bandwidth",
                "Create API urls up to 100 photos"
            ],
            isPopular: true
        },
        {
            header: Plan.Pro.toString(),
            subheader: "For power users, creators, and professionals with massive libraries.",
            price: 15,
            buttonContent: "Upgrade now",
            title: "Everything in the Plus Plan, plus:",
            contents: [
                "2 TB total cloud storage",
                "RAW image format & 4K/8K video support",
                "Automated offsite backups",
                "Password-protected and expiring shared links",
                "VIP customer support via chat",
                "Create API urls up to 500 photos"
            ],
            isPopular: false
        }
    ]

    return (
        <Container className="w-full! max-h-max p-0! m-0!" maxWidth={false}>
            <Box className="h-18"/>
            <Stack className="w-full h-50 items-center justify-center gap-4">
                <Typography className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="h4" component={motion.span} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Safe, stunning storage that grows with you</Typography>
                <Typography className="text-zinc-500 text-lg!" component={motion.span} initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Keep your life’s gallery secure. Start with a free tier and upgrade only when you need more space</Typography>
            </Stack>
            <Container className="min-h-screen max-h-max items-center justify-evenly" component={Stack} direction={"row"}>
                {plans.map((plan, index) =>
                    <PlanCard header={plan.header} subheader={plan.subheader} price={plan.price} buttonContent={plan.buttonContent} title={plan.title} contents={plan.contents} isPopular={plan.isPopular} key={index}/>
                )}
            </Container>
            <Box className="justify-self-center place-content-center py-8" component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                <Button className="normal-case! text-xs! text-blue-500! bg-transparent! border-blue-500! hover:opacity-80 transition-opacity! duration-200" variant="outlined" endIcon={<South className="text-xs!"/>} onClick={() => compareSectionRef.current.scrollIntoView({ behavior: "smooth" })}>Compare Plans</Button>
            </Box>
        </Container>
    );
}

export default PlanSection;