import { FunctionComponent, useState, useEffect } from "react";
import Header from "../../common/Header/Header";
import SearchBar from "../../common/SearchBar/SearchBar";
import CategoryCourses, { CategoryCoursesProps } from "../../common/CategoryCourses/CategoryCourses";
import NavBar from "../../common/NavBar/NavBar";
import Modal from "../../common/Modal/Modal";
import literature from "../../assets/literature.webp";
import girl1 from "../../assets/woman1.jpg";

export interface HomeProps {
    categories: Map<string, CategoryCoursesProps & { id: string }>;
    onCategoryClick: (id: string) => void;
}

const openMenu = () => {
    console.log("Menu clicked");
};

const Home: FunctionComponent<HomeProps> = ({ categories, onCategoryClick }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    };

    const handleCourseClick = (courseId: string) => {
        setSelectedCourse(courseId);
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <Header title="Home" icon1="menu" onIconClick1={openMenu}/>
            <div
                className="mt-[88px] mb-[80px] flex flex-col w-full overflow-y-auto flex-grow p-x-4 p-y-2 overflow-x-hidden flex-1">
                <SearchBar placeholder="Insert a class code or name"/>
                {Array.from(categories.entries()).map(([key, categoryProps]) => (
                    <CategoryCourses
                        key={key}
                        {...categoryProps}
                        onCourseClick={handleCourseClick}
                        onCategoryClick={() => onCategoryClick(categoryProps.id)}
                    />
                ))}
            </div>
            <NavBar index={1} />

            {isModalOpen && selectedCourse && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    title={"William Shakespeare"}
                    content={"William Shakespeare, often hailed as the greatest playwright in the English language and one of the most influential writers in world literature, was born in Stratford-upon-Avon, England, in 1564. His work has left an indelible mark on literature, theater, and the English language itself. Over his lifetime, Shakespeare wrote approximately 39 plays, 154 sonnets, and two narrative poems, encompassing a vast range of genres that include tragedy, comedy, and history. His ability to capture the complexity of human emotions and the nuances of individual psychology set him apart from his contemporaries and continue to resonate with readers and audiences across the globe."
                    }
                    showPrimaryButton={true}
                    showCloseIcon={true}
                    imageSrc={literature}
                    showCourseImage={true}
                    showTeacherTag={true}
                    showFooter={true}
                    showFav={true}
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
