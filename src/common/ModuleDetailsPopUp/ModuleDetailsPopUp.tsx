import React, { useState } from "react";
import ModuleCardCarousel from "../ModuleCardCarousel/ModuleCardCarousel";
import Icon from "../Icon/Icon";
import CourseImage from "../CourseImage/CourseImage";
import PersonTag from "../TeacherTag/PersonTag";
import Tabs from "../Tabs/Tabs";
import exampleImage1 from "../../assets/girl2.jpeg";
import exampleImage2 from "../../assets/boy3.jpg";
import exampleImage3 from "../../assets/woman1.jpg";
import financeImg from "../../assets/finance.png";
import economics from "../../assets/economics.png";
import finance3 from "../../assets/finance3.png";
import exampleImage11 from "../../assets/biology.png";
import exampleImage21 from "../../assets/economics.png";
import exampleImage31 from "../../assets/finance.png";
import example41 from "../../assets/chemestry.jpeg";
import example51 from "../../assets/literature.webp";

const modulesData = [
    { id: "1", title: "Introduction to Financial Analysis", avatarSource: exampleImage1, courseSource: financeImg, progress: 80 },
    { id: "2", title: "Shares, Stocks and Equities", avatarSource: exampleImage2, courseSource: economics, progress: 45 },
    { id: "3", title: "Capitalization & Regulations", avatarSource: exampleImage3, courseSource: finance3, progress: 70 },
    { id: "4", title: "Biology I", avatarSource: exampleImage1, courseSource: exampleImage11, progress: 80 },
    { id: "5", title: "Finance", avatarSource: exampleImage3, courseSource: exampleImage31, progress: 70 },
    { id: "6", title: "Chemestry", avatarSource: exampleImage1, courseSource: example41, progress: 20 },
    { id: "7", title: "Literature", avatarSource: exampleImage3, courseSource: example51, progress: 100 },
];

const ModuleDetailsPopUp: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"Modules" | "About">("Modules");
    const handleTabChange = (tab: "Modules" | "About") => {
        setActiveTab(tab);
    };

    return (
        <div
            className="w-full max-w-[336px] h-full max-h-[90vh] sm:max-h-[80vh] md:max-h-[672px] relative rounded-2xl bg-grayscale-white border-grayscale-gray-300 border-[0.5px] border-solid flex flex-col items-center p-4 sm:p-6">
            {/* Close Icon */}
            <div className="self-end">
                <Icon variant={"close"} size={"medium"} fill={true} />
            </div>

            <div className="w-full h-[200px] sm:h-[250px] rounded-lg overflow-hidden mb-4">
                <CourseImage subject="finance2" />
            </div>

            <div className="flex flex-col items-center justify-center gap-2 mb-4 w-full">
                <h2 className="text-lg font-semibold text-center">Financial Analysis and Modeling</h2>
                <div className="flex flex-row items-center justify-center gap-4 text-black">
                    <div className="flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                        <Icon variant="star" fill={true} size="small"/>
                    </div>
                    <div className="w-20 leading-none ">4.9 (1.724)</div>
                </div>
                <PersonTag size="large" name="Christopher Suis" avatarSrc={exampleImage2}/>
            </div>
        </div>


    <Tabs
        tab1Label="Modules"
        tab2Label="About"
        onTabChange={handleTabChange}
            />


            <div className="w-full h-full overflow-auto">
                {activeTab === "Modules" ? (
                    <ModuleCardCarousel
                        modules={modulesData}
                        onModuleClick={(id) => alert(`Module with id ${id} clicked`)}
                    />
                ) : (
                    <div className="p-4 text-base text-left">
                        <p>Learn how to conduct in-depth financial analyses and build financial models that drive strategic decisions.</p>
                        <p>This course covers financial statement analysis, revenue and expense forecasting, and evaluating business performance. Ideal for those looking to deepen their skills in quantitative analysis and financial modeling.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModuleDetailsPopUp;
