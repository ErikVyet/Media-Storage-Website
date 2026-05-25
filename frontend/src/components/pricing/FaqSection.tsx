import { Box, Container, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import FaqBox from "./FaqBox";
import { motion } from "motion/react";

function FaqSection() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const faqs = [
        { question: "What happens if I hit my plan's storage limit?", answer: "Uploads will be temporarily paused until you delete some media or upgrade to a paid plan. Your existing photos are completely safe and will never be deleted." },
        { question: "How does the 'Create API URLs' feature work?", answer: "Our platform allows you to use your storage bucket as a CDN for web or mobile apps. When you generate an API URL for a photo, you get a highly optimized, fast-loading direct link that you can embed in your code (e.g., using it in an <img> tag or fetching it in Android Studio). The limits (20, 100, or 500) represent the total number of active external URLs you can expose at one time." },
        { question: "Is my media private and secure? Can you see my photos?", answer: "Your privacy is our core priority. All uploaded media is encrypted both in transit and at rest using bank-grade AES-256 encryption. Unlike mainstream big-tech solutions, we never parse your data to sell ads, and we never use your private photos or videos to train public AI models." },
        { question: "What counts towards my Bandwidth (Egress) limit?", answer: "Egress bandwidth is consumed when you download your media or when someone views your photos via an API URL or a shared public album link. Standard browsing inside our web or mobile app uses minimal optimized cache and rarely hits these limits under normal personal use." },
        { question: "How does the Shared Family Vault work?", answer: "On the Plus and Pro plans, you can invite up to 5 family members or friends. This creates a pooled storage space that everyone can contribute to. However, your personal main gallery remains completely private. Other members can only see the media you explicitly choose to move into the Family Vault or share via shared albums." },
        { question: "Why does the Free plan pause after 1 week of inactivity?", answer: "To keep our free tier sustainable, we pause the background optimization workers for Free accounts that haven't been logged into for over 7 days. The moment you log back into the app or website, your account instantly unpauses and resumes normal operations. Paid accounts are hosted on dedicated, always-on infrastructure and never pause." },
        { question: "Can I upload RAW files or uncompressed 4K video?", answer: "Optimized for standard compressed formats like JPEG, PNG, HEIC, and MP4 for Free and Plus plan. Built specifically for creators. It unlocks full support for heavy professional formats like RAW, DNG, CR3, and ProRes uncompressed 4K/8K video up to a massive 50 GB per individual file for Pro plan." },
        { question: "Can I export my data if I choose to cancel my subscription?", answer: "Absolutely. Your memories belong to you, not us. You can request a full archive download of your entire library in its original quality at any time with a single click from your dashboard settings. If you downgrade, your data will remain accessible for download for 30 days so you can safely transition." }
    ];

    return (
        <Container className="min-h-screen max-h-max" maxWidth={"md"}>
            <Box className="place-content-center h-55 text-center">
                <Typography className={`justify-self-center ${theme === "light" ? 'text-zinc-800' : 'text-zinc-100'}`} variant="h4" component={motion.span} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Frequently asked questions</Typography>
            </Box>
            <Box>
                {faqs.map((faq, index) => 
                    <FaqBox question={faq.question} answer={faq.answer} key={index}/>
                )}
            </Box>
        </Container>
    );
}

export default FaqSection;