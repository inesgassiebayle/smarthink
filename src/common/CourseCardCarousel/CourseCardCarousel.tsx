import React, { FunctionComponent } from "react";
import CourseCard, { CourseCardProps } from "../CourseCard/CourseCard";

interface CourseCardCarouselProps {
    variant: "vertical" | "horizontal";
    courses: Omit<CourseCardProps, "variant">[];
    onCourseClick: (id: string) => void;
}

const CourseCardCarousel: FunctionComponent<CourseCardCarouselProps> = ({ courses, variant, onCourseClick }) => {
    const classesOrientation = variant === "horizontal" ? "over flex-row" : "flex-col";
    return (
        <div className="course-card-carousel w-full overflow-auto">
            {variant === "horizontal" ? (
                <div
                    className={`flex flex-row overflow-x-auto gap-[var(--Space-200,8px)] self-stretch 
                    [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden w-fit`}
                >
                    {courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            variant={"vertical"}
                            {...course}
                            onClick={() => onCourseClick(course.id)}
                        />
                    ))}
                </div>
            ) : (
                <div
                    className={`flex flex-col overflow-y-auto gap-[var(--Space-200,8px)] self-stretch 
                    [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden`}
                >
                    {courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            variant="horizontal"
                            {...course}
                            onClick={() => onCourseClick(course.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CourseCardCarousel;
