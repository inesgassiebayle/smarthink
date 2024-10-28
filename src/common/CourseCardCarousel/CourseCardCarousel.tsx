import React from "react";
import CourseCard, { CourseCardProps } from "../CourseCard/CourseCard";

interface CourseCardCarouselProps {
    variant: "vertical" | "horizontal";
    courses: Omit<CourseCardProps, 'variant'>[];
}

const CourseCardCarousel: React.FC<CourseCardCarouselProps> = ({ courses, variant }) => {
    return (
        <div className="course-card-carousel">
            {variant === "horizontal" ? (
                <div
                    className={`flex flex-row overflow-x-auto gap-[var(--Space-200,8px)] self-stretch 
                    [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden`}
                >
                    {courses.map((course, index) => (
                        <CourseCard key={index} variant="vertical" {...course} />
                    ))}
                </div>
            ) : (
                <div
                    className={`flex flex-col overflow-y-auto gap-[var(--Space-200,8px)] self-stretch 
                    [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden`}
                >
                    {courses.map((course, index) => (
                        <CourseCard key={index} variant="horizontal" {...course} />
                    ))}
                    {/* TODO MAKE THE SCROLL BAR INVISIBLE */}
                </div>
            )}
        </div>
    );
};

export default CourseCardCarousel;
