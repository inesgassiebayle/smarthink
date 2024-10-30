import {FunctionComponent} from "react";
import Header from "../../common/Header/Header";
import CourseLevelCard from "../../common/CourseLevelCard/CourseLevelCard";
import ProgressMap from "../../common/ProgressMap/ProgressMap";
import {ProgressMapModuleProps} from "../../common/ProgressMapModule/ProgressMapModule";
import NavBar from "../../common/NavBar/NavBar";

export interface CourseMapProps {
    modules: Omit<Omit<ProgressMapModuleProps, "variant">, "state">[];
    moduleReached: number;
    moduleState: "in-progress" | "default" | "completed";
    level: number;
    title: string;
    progress: number;
    points: number;
    courseSrc: string;
}

const openMenu = () => {
    console.log("Open menu");
};

const CourseMap: FunctionComponent<CourseMapProps> = ({modules, moduleState, moduleReached, progress, title, points, level, courseSrc}) => {
    return (
        <div className="flex flex-col justify-between items-center w-[360px] h-[800px] space-y-2 mx-auto">
            <Header title={title} icon1={"menu"} onIconClick1={openMenu}/>
            <CourseLevelCard variant={"leveled"} courseSource={courseSrc} level={level} points={points} progress={progress}/>
            <ProgressMap modules={modules} moduleReached={moduleReached} moduleState={moduleState}/>
            <NavBar/>
        </div>
    );
};
export default CourseMap;