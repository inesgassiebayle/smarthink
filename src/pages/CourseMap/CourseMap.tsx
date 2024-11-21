import {FunctionComponent, useState, useEffect} from "react";
import Header from "../../common/Header/Header";
import CourseLevelCard from "../../common/CourseLevelCard/CourseLevelCard";
import ProgressMap from "../../common/ProgressMap/ProgressMap";
import {ProgressMapModuleProps} from "../../common/ProgressMapModule/ProgressMapModule";
import NavBar from "../../common/NavBar/NavBar";
import Modal from "../../common/Modal/Modal";
import literature from "../../assets/environment.png";
import girl1 from "../../assets/woman1.jpg";

export interface CourseMapProps {
    modules: Omit<Omit<ProgressMapModuleProps & { id: string }, "variant">, "state">[];
    moduleReached: number;
    moduleState: "in-progress" | "default" | "completed";
    level: number;
    title: string;
    progress: number;
    points: number;
    courseSrc: string;
    onModuleClick: (id: string) => void;
}

const openMenu = () => {
    console.log("Open menu");
};

const CourseMap: FunctionComponent<CourseMapProps> = ({modules, onModuleClick, moduleState, moduleReached, progress, title, points, level, courseSrc}) => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modalOpen]);

    return (
        <div className="flex flex-col justify-between items-center w-full h-full mx-auto">
            <Header title={title} icon4={"information"} onIconClick4={() => setModalOpen(true)}/>
            <div className={"my-[25%] space-y-2 pt-2 pb-2 w-full"}>
                <CourseLevelCard variant={"leveled"} courseSource={courseSrc} level={level} points={points} progress={progress}/>
                <ProgressMap onModuleClick={onModuleClick} modules={modules} moduleReached={moduleReached} moduleState={moduleState}/>
            </div>
            <NavBar/>
            {modalOpen && (
                <Modal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title={"Environment Basic Concepts"}
                    content={"An environment refers to the surroundings or conditions in which a person, animal, plant, or any living organism operates and interacts. It includes everything that surrounds us, from natural elements like air, water, and land, to the artificial structures and social conditions created by humans. In ecological terms, the environment encompasses both biotic factors (living organisms and their relationships) and abiotic factors (non-living elements like temperature, humidity, and sunlight) that affect the ecosystems.\n" +
                        "\n" +
                        "In a broader perspective, the concept of the environment also applies to various fields, such as computing, where a \"development environment\" refers to the setup in which software development occurs, including tools, configurations, and settings. Whether in natural sciences or technological domains, understanding environmental factors is crucial for maintaining balance, promoting sustainability, and improving the systems in which living organisms or technologies coexist."}
                    showPrimaryButton={true}
                    showCloseIcon={true}
                    imageSrc={literature}
                    showCourseImage={true}
                    showTeacherTag={true}
                    showFooter={true}
                    teacherTag={{ name: "Jane Doe", avatarSrc: girl1 }}
                />
            )}
        </div>
    );
};

export default CourseMap;
