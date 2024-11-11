import { FunctionComponent } from 'react';
import chemistry from "../../assets/chemestry.jpeg";
import math from "../../assets/math.jpg";
import literature from "../../assets/literature.webp";
import biology from "../../assets/biology.png";
import history from "../../assets/history.png";
import finance2 from "../../assets/finance2.png";
import writing from "../../assets/writing.png";
import economics from "../../assets/economics.png";
import finance from "../../assets/finance.png";
import finance3 from "../../assets/finance3.png";

export type CourseImageProps = {
    subject?: 'chemistry' | 'math' | 'literature' | 'biology' | 'history' | 'finance2' | 'writing' | 'economics' | 'finance' | 'finance3';
};



const subjectImageMap: { [key: string]: string } = {
    chemistry: chemistry,
    math: math,
    literature: literature,
    biology: biology,
    history: history,
    finance2: finance2,
    writing: writing,
    economics: economics,
    finance: finance,
    finance3: finance3,
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
