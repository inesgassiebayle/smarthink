import { FunctionComponent } from 'react';

// Define the prop type to include the `subject` variant
export type CourseImageProps = {
    subject?: 'chemistry' | 'math' | 'literature' | 'biology' | 'history' | 'finance2' | 'writing' | 'economics' | 'finance' | 'finance3';
};

// A mapping of subjects to image file paths
const subjectImageMap: { [key: string]: string } = {
    chemistry: '/assets/chemestry.jpeg',
    math: '/assets/math.jpg',
    literature: '/assets/literature.webp',
    biology: '/assets/biology.png',
    history: '/assets/history.png',
    finance2: '/assets/finance2.png',
    writing: '/assets/writing.png',
    economics: 'economics',
    finance: '/assets/finance.png',
    finance3: 'src/assets/finance3.png',
};

const CourseImage: FunctionComponent<CourseImageProps> = ({ subject = 'math' }) => {
    const imageSrc = subjectImageMap[subject] || 'math.jpg';

    return (
        <div className="w-full h-full relative flex flex-col items-center justify-center">
            <img
                className="self-stretch flex-1 relative rounded-[25px] max-w-full overflow-hidden max-h-full object-cover"
                alt={subject}
                src={imageSrc}
            />
        </div>
    );
};

export default CourseImage;
