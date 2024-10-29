import { FunctionComponent } from "react";
import { CourseCardProps } from "../CourseCard/CourseCard";
import CourseCardCarousel from "../CourseCardCarousel/CourseCardCarousel";
import Button from "../Button/Button";

export interface CategoryCoursesProps {
    title: string;
    courses: Omit<CourseCardProps, 'variant'>[];
    onClick: () => void;
}

const CategoryCourses: FunctionComponent<CategoryCoursesProps> = ({
                                                                      courses,
                                                                      title,
                                                                      onClick,
                                                                  }) => {
    return (
        <div className="flex flex-col items-start self-stretch">
            <div className="flex h-12 w-full px-[var(--Space-200,8px)] justify-between items-center">
                <span className="overflow-hidden text-ellipsis text-text-black font-inter text-base font-bold leading-[120%] line-clamp-1 flex-[1_0_0%]">
                    {title}
                </span>
                <Button size="small" variant="textButton" onClick={onClick}>
                    View All
                </Button>
            </div>
            <div className="w-full overflow-x-auto">
                <CourseCardCarousel variant="horizontal" courses={courses} />
            </div>
        </div>
    );
};

export default CategoryCourses;
