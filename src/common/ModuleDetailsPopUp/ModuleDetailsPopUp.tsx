import React, { FunctionComponent, useState } from "react";
import ModuleCardCarousel from "../ModuleCardCarousel/ModuleCardCarousel";
import Icon from "../Icon/Icon";
import CourseImage from "../CourseImage/CourseImage";
import PersonTag from "../TeacherTag/PersonTag";
import Tabs from "../Tabs/Tabs";
import { ModuleCardProps } from "../ModuleCard/ModuleCard";

export interface ModuleDetailsPopUpProps {
    modules: Omit<ModuleCardProps, "variant">[];
    subject?: 'chemistry' | 'math' | 'literature' | 'biology' | 'history' | 'finance2' | 'writing' | 'economics' | 'finance' | 'finance3';
    title: string;
    rating: string;
    information: string;
    teacher: string;
    teacherImg: string;
}

const ModuleDetailsPopUp: FunctionComponent<ModuleDetailsPopUpProps> = ({ modules, teacherImg, teacher, title, rating, subject, information }) => {
    const [activeTab, setActiveTab] = useState<"Modules" | "About">("Modules");

    const handleTabChange = (tab: "Modules" | "About") => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full max-w-[800px] h-full max-h-[90vh] sm:max-h-[80vh] md:max-h-[90vh] lg:max-h-full relative rounded-2xl bg-grayscale-white border-grayscale-gray-300 border-[0.5px] border-solid flex flex-col items-center p-4 sm:p-6">
            <div className="self-end">
                <Icon variant="close" size="medium" fill={true} />
            </div>

            <div className="w-full flex flex-col items-center">
                <div className="w-full h-[200px] sm:h-[250px] rounded-lg overflow-hidden mb-4">
                    <CourseImage subject={subject} />
                </div>

                <div className="flex flex-col items-center justify-center gap-2 mb-4 w-full">
                    <h2 className="text-lg font-semibold text-center">{title}</h2>
                    <div className="flex flex-row items-center justify-center gap-4 text-black">
                        <div className="flex items-center">
                            <div className="w-4 h-4 flex items-center justify-center">
                                <Icon variant="star" fill={true} size="small" />
                            </div>
                            <div className="w-20 leading-none">{rating}</div>
                        </div>
                        <PersonTag size="large" name={teacher} avatarSrc={teacherImg} />
                    </div>
                </div>
            </div>

            <Tabs tab1Label="Modules" tab2Label="About" onTabChange={handleTabChange} />

            <div className="w-full h-full overflow-auto flex-grow">
                {activeTab === "Modules" ? (
                    <ModuleCardCarousel
                        modules={modules.map((module) => ({ ...module, variant: "horizontal" }))}
                        onModuleClick={(id) => alert(`Module with id ${id} clicked`)}
                    />
                ) : (
                    <div className="p-4 text-base text-left">
                        <p>{information}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModuleDetailsPopUp;
