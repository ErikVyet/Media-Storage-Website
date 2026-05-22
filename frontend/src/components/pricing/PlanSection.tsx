import { Box, Container, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Plan } from "../../enums/Plan";
import PlanCard from "./PlanCard";

function PlanSection() {
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
                <Typography className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-300'}`} variant="h4">Safe, stunning storage that grows with you</Typography>
                <Typography className="text-zinc-500 text-lg!">Keep your life’s gallery secure. Start with a free tier and upgrade only when you need more space</Typography>
            </Stack>
            <Container className="min-h-screen max-h-max items-center justify-evenly" component={Stack} direction={"row"}>
                {plans.map((plan, index) =>
                    <PlanCard header={plan.header} subheader={plan.subheader} price={plan.price} buttonContent={plan.buttonContent} title={plan.title} contents={plan.contents} isPopular={plan.isPopular} key={index}/>
                )}
            </Container>
        </Container>
    );
}

export default PlanSection;