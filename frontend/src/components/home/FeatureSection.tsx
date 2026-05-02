import { Container, Grid } from "@mui/material";
import DatabaseFeatureCard from "./DatabaseFeatureCard";
import AuthenticationFeatureCard from "./AuthenticationFeatureCard";
import SmartSearchFeatureCard from "./SmartSearchFeatureCard";
import StorageFeatureCard from "./StorageFeatureCard";
import DataApiFeatureCard from "./DataApiFeatureCard";

function FeatureSection() {
    const cards = [
        { element: <DatabaseFeatureCard />, size: 8 },
        { element: <AuthenticationFeatureCard />, size: 4},
        { element: <SmartSearchFeatureCard />, size: 4},
        { element: <StorageFeatureCard />, size: 4},
        { element: <DataApiFeatureCard />, size: 4}
    ];

    return (
        <Container className="min-h-screen h-screen max-h-max">
            <Grid className="size-full" container spacing={1.5}>
                {cards.map((card, index) =>
                    <Grid className="rounded-xl" size={card.size} key={index}>
                        {card.element}
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}

export default FeatureSection;