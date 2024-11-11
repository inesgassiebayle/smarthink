import boy3Img from '../../assets/boy3.jpg';
import {useState} from 'react';
import financeImg from '../../assets/finance.png';
import Icon from "../Icon/Icon";
import CourseImage from "../CourseImage/CourseImage";
import PersonTag from "../TeacherTag/PersonTag";
import Tabs from "../Tabs/Tabs";
import CourseCard from "../CourseCard/CourseCard";
import economics from '../../assets/economics.png';
import finance3 from '../../assets/finance3.png';



const CourseDetailsPopUp: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"Modules" | "About">("Modules");
    const handleTabChange = (tab: "Modules" | "About") => {
        setActiveTab(tab);
    };
    return (
        <div
            className="w-[336px] relative rounded-2xl bg-grayscale-white border-grayscale-gray-300 border-[0.5px] border-solid box-border h-[672px] flex flex-col items-center justify-center pt-2 pb-2 text-justify text-base text-text-ui-text-default font-inter">
            <div
                className="self-stretch rounded-t-2xl rounded-b-none bg-grayscale-white overflow-hidden flex flex-col items-end justify-center py-2 px-4">
                <div
                    className="w-6 h-6 overflow-hidden shrink-0 flex flex-row items-center justify-center p-0.5 box-border">
                    <Icon variant={"close"} size={"medium"} fill={true}/>
                </div>
            </div>
            <div
                className="self-stretch flex-1 rounded-t-none rounded-b-2xl bg-grayscale-white overflow-hidden flex flex-col items-center justify-center pt-2 px-0 pb-0">
                <div
                    className="self-stretch bg-grayscale-white h-[200px] overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
                    <div
                        className="self-stretch flex-1 relative rounded-[25px] max-w-full overflow-hidden max-h-full object-cover">
                        <CourseImage subject={"finance2"}/>
                    </div>
                </div>
                <div className="self-stretch bg-grayscale-white flex flex-col items-center justify-center gap-2">
                    <div className="self-stretch flex flex-row items-center justify-center py-2 px-4">
                        <div
                            className="flex-1 w-full relative text-base leading-[120%] font-inter text-black text-justify inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                            Financial Analysis and Modeling: Making Data-Driven Business Decisions
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-8 text-black">
                        <div className="bg-grayscale-white flex items-center py-2 px-0 gap-1">
                            <div className="w-4 h-4 flex items-center justify-center">
                                <Icon variant="star" fill={true} size="small"/>
                            </div>
                            <div className="w-20 leading-none ">4.9 (1.724)</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <PersonTag size="large" name="Christopher Suis" avatarSrc={boy3Img}/>
                        </div>
                    </div>
                </div>
                <Tabs
                    tab1Label="Module"
                    tab2Label="About"
                    onTabChange={handleTabChange} // Maneja el cambio de pestañaaaaaaaaaa
                />
                <div
                    className="self-stretch flex-1 flex flex-col items-center justify-start p-0 gap-2 text-left text-base text-text-ui-text-default tab-content w-[336px] h-[271px] overflow-y-auto">
                    {activeTab === "Modules" ? (
                        <div className="flex flex-col gap-2">
                            <CourseCard
                                subject="Finance"
                                variant="horizontal"
                                teacher="25 min"
                                title="Introduction to Financial Analysis"
                                avatarSource={boy3Img}
                                id="1"
                                courseSource={financeImg}
                            />
                            <CourseCard
                                subject="Finance"
                                variant="horizontal"
                                teacher="19 min"
                                title="Shares, Stocks and Equities"
                                avatarSource={boy3Img}
                                id="2"
                                courseSource={economics}
                            />
                            <CourseCard
                                subject="Finance"
                                variant="horizontal"
                                teacher="18 min"
                                title="Capitalization & Regulations"
                                avatarSource={boy3Img}
                                id="3"
                                courseSource={finance3}
                            />
                        </div>
                    ) : (
                        <div className="w-full relative text-base leading-[120%] font-inter text-grayscale-black text-justify inline-block p-4 gap-2">

                            <p className="m-0">
                                {`Learn how to conduct in-depth financial analyses and build financial models that drive strategic decisions. `}
                            </p>
                            <p className="m-0">
                                This course covers the basics of financial statement analysis, revenue and expense
                                forecasting, and evaluating business performance. Ideal for those looking to deepen
                                their skills in quantitative analysis and financial modeling.
                            </p>
                            </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CourseDetailsPopUp;