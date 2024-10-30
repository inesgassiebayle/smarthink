import { FunctionComponent } from "react";
import { CourseCardProps } from "../CourseCard/CourseCard";
import CourseCardCarousel from "../CourseCardCarousel/CourseCardCarousel";
import Button from "../Button/Button";

export interface CategoryCoursesProps {
    title: string;
    courses: Omit<CourseCardProps, 'variant'>[];
    onCourseClick: (id: string) => void;
    onCategoryClick: () => void;
}

const CategoryCourses: FunctionComponent<CategoryCoursesProps> = ({
                                                                      courses,
                                                                      title,
                                                                      onCategoryClick,
    onCourseClick
                                                                  }) => {
    return (
        <div className="flex flex-col items-start w-full">
            <div className="flex h-12 w-full px-[var(--Space-200,8px)] justify-between items-center">
                <span className="overflow-hidden text-ellipsis text-text-black font-inter text-base font-bold leading-[120%] line-clamp-1">
                    {title}
                </span>
                <Button size="small" variant="textButton" onClick={onCategoryClick}>
                    View All
                </Button>
            </div>
            <CourseCardCarousel onCourseClick={onCourseClick} variant="horizontal" courses={courses} />
        </div>
    );
};

export default CategoryCourses;
