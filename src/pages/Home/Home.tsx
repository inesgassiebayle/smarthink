import { FunctionComponent, useState } from "react";
import Header from "../../common/Header/Header";
import SearchBar from "../../common/SearchBar/SearchBar";
import CategoryCourses, { CategoryCoursesProps } from "../../common/CategoryCourses/CategoryCourses";
import NavBar from "../../common/NavBar/NavBar";
import Modal from "../../common/Modal/Modal";
import literature from "../../assets/literature.webp";
import girl1 from "../../assets/woman1.jpg";

export interface HomeProps {
    categories: Map<string, CategoryCoursesProps>;
}

const openMenu = () => {
    console.log("Menu clicked");
};

const Home: FunctionComponent<HomeProps> = ({ categories }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    };

    const handleCourseClick = (courseId: string) => {
        setSelectedCourse(courseId);
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-col items-center gap-[var(--Space-400,16px)]">
            <Header title="Home" icon1="menu" onIconClick1={openMenu}/>
            <div
                className="mt-[88px] mb-[80px] flex flex-col w-full overflow-y-auto flex-grow gap-[var(--Space-400,16px)] overflow-x-hidden flex-1">
                <SearchBar placeholder="Insert a class code or name"/>
                {Array.from(categories.entries()).map(([key, categoryProps]) => (
                    <CategoryCourses key={key} {...categoryProps} onCourseClick={handleCourseClick} />
                ))}
            </div>
            <NavBar index={1} />

            {isModalOpen && selectedCourse && (
                <Modal
                    isOpen={isModalOpen}
                    title={"William Shakespeare"}
                    content={
                        "William Shakespeare was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist."
                    }
                    onClose={handleCloseModal}
                    showCloseIcon={true}
                    imageSrc={literature}
                    buttons={[
                        {
                            label: "Enroll",
                            onClick: () => {
                                console.log("Enrolling in course");
                                handleCloseModal();
                            },
                            variant: "filled",
                        },
                    ]}
                    teacherTag={{ name: "Jane Doe", avatarSrc: girl1 }}
                    actionIconVariant={"heart"}
                />
            )}
        </div>
    );
};

export default Home;
