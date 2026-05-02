import { Stack } from "@mui/material";
import DatabaseTable from "./DatabaseTable";
import { AttachMoney, Tag, Title } from "@mui/icons-material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import RelationshipLine from "./RelationshipLine";
import { motion } from "motion/react";

function DatabaseTables() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const categoryData = [
        { label: "id", icon: <Tag className={`scale-60 ${theme === "light" ? 'text-zinc-700' : 'text-zinc-100'}`}/>, primary: true, foreign: false },
        { label: "name", icon: <Title className={`scale-60 ${theme === "light" ? 'text-zinc-700' : 'text-zinc-100'}`}/>, primary: false, foreign: false }
    ];
    const productData = [
        { label: "id", icon: <Tag className={`scale-60 ${theme === "light" ? 'text-zinc-700' : 'text-zinc-100'}`}/>, primary: true, foreign: false },
        { label: "name", icon: <Title className={`scale-60 ${theme === "light" ? 'text-zinc-700' : 'text-zinc-100'}`}/>, primary: false, foreign: false },
        { label: "price", icon: <AttachMoney className={`scale-60 ${theme === "light" ? 'text-zinc-700' : 'text-zinc-100'}`}/>, primary: false, foreign: false },
        { label: "quantity", icon: <Tag className={`scale-60 ${theme === "light" ? 'text-zinc-700' : 'text-zinc-100'}`}/>, primary: false, foreign: false },
        { label: "product_id", icon: <Tag className={`scale-60 ${theme === "light" ? 'text-zinc-700' : 'text-zinc-100'}`}/>, primary: false, foreign: true }
    ];

    return (
        <Stack className="size-full items-center justify-center" direction={"row"} component={motion.div} initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <DatabaseTable header={"Category"} data={categoryData} />
            <RelationshipLine startRelation="one" endRelation="many" />
            <DatabaseTable header={"Product"} data={productData}/>
        </Stack>
    );
}

export default DatabaseTables;