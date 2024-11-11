import React, {useState} from "react";
import Tab from "../Tab/Tab";

interface TabsProps {
    tab1Label: string;
    tab2Label: string;
    onTabChange: (tab: "Modules" | "About") => void; // Nueva prop para manejar el cambio de pestaña
}

const Tabs: React.FC<TabsProps> = ({ tab1Label, tab2Label, onTabChange }) => {
    const [activeTab, setActiveTab] = useState<"tab1" | "tab2">("tab1");

    const handleClick = (tab: "tab1" | "tab2") => {
        setActiveTab(tab);
        if (onTabChange) {
            onTabChange(tab === "tab1" ? "Modules" : "About"); // Asegúrate de que onTabChange no sea undefined
        } else {
            console.error('onTabChange is undefined');
        }
    };

    return (
        <div className="flex w-full h-[80px] py-[var(--Space-200,8px)] justify-between items-center">
            <Tab
                state={activeTab === "tab1" ? "active" : "default"}
                onClick={() => handleClick("tab1")}
                className="flex-1 text-center"
            >
                {tab1Label}
            </Tab>
            <Tab
                state={activeTab === "tab2" ? "active" : "default"}
                onClick={() => handleClick("tab2")}
                className="flex-1 text-center"
            >
                {tab2Label}
            </Tab>
        </div>
    );
};

export default Tabs;