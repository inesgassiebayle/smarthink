import { FunctionComponent } from "react";
import Header from "../../common/Header/Header";
import SearchBar from "../../common/SearchBar/SearchBar";
import CategoryCourses, { CategoryCoursesProps } from "../../common/CategoryCourses/CategoryCourses";
import NavBar from "../../common/NavBar/NavBar";

export interface HomeProps {
    categories: Map<string, CategoryCoursesProps>;
}

const openMenu = () => {
    console.log("Menu clicked");
};

const Home: FunctionComponent<HomeProps> = ({ categories }) => {
    return (
        <div className="flex flex-col items-center gap-[var(--Space-400,16px)] w-[360px] h-[800px]">
            <Header title="Home" icon1="menu" onIconClick1={openMenu} />
            <SearchBar placeholder="Insert a class code or name" />
            <div
                className="flex flex-col w-full overflow-y-auto flex-grow gap-[var(--Space-400,16px)] px-[var(--Space-200,8px)]">
                {Array.from(categories.entries()).map(([key, categoryProps]) => (
                    <CategoryCourses key={key} {...categoryProps} />
                ))}
            </div>
            <div className="w-full absolute bottom-0">
                <NavBar index={1} />
            </div>
        </div>
    );
};

export default Home;
