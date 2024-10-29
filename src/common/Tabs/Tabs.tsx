import React, { useState } from "react";
import Tab from "../Tab/Tab";

interface TabsProps {
    tab1Label: string;
    tab2Label: string;
}

const Tabs: React.FC<TabsProps> = ({ tab1Label, tab2Label }) => {
    const [activeTab, setActiveTab] = useState<"tab1" | "tab2">("tab1");

    return (
        <div className="flex w-[360px] h-[80px] px-[var(--Space-400,16px)] py-[var(--Space-200,8px)] justify-between items-center">
            <Tab
                state={activeTab === "tab1" ? "active" : "default"}
                onClick={() => setActiveTab("tab1")}
            >
                {tab1Label}
            </Tab>
            <Tab
                state={activeTab === "tab2" ? "active" : "default"}
                onClick={() => setActiveTab("tab2")}
            >
                {tab2Label}
            </Tab>
        </div>
    );
};

export default Tabs;
