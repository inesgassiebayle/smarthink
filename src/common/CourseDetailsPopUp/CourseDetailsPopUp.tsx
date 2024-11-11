import boy3Img from '../../assets/boy3.jpg';
import { FunctionComponent } from 'react';
import Icon from "../Icon/Icon";
import CourseImage from "../CourseImage/CourseImage";
import PersonTag from "../TeacherTag/PersonTag";
import Tabs from "../Tabs/Tabs";



const CourseDetailsPopUp:FunctionComponent = () => {
    return (
        <div
            className="w-[336px] relative rounded-2xl bg-grayscale-white border-grayscale-gray-300 border-[0.5px] border-solid box-border h-[672px] flex flex-col items-center justify-center pt-2 pb-2 text-justify text-base text-text-ui-text-default font-inter-body-small-regular">
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
                        <div className="flex-1 relative leading-[120%] overflow-hidden text-ellipsis whitespace-nowrap">
                            Financial Analysis and Modeling: Making Data-Driven Business Decisions
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-8 text-black">
                        <div className="bg-grayscale-white flex items-center py-2 px-0 gap-1">
                            <div className="w-4 h-4 flex items-center justify-center">
                                <Icon variant="star" fill={true} size="small"/>
                            </div>
                            <div className="w-20 leading-none text-ellipsis">4.9 (1.724)</div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-text-ui-text-default">
                            <div className="rounded-[25px]">
                                <PersonTag size="large" name="Christopher Suis" avatarSrc={boy3Img}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-[349px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-4 px-0 box-border gap-2 text-center text-xs text-primary-ui-primary-500">
                    <Tabs tab1Label={"Topics"} tab2Label={"About"}/>
                    <div
                        className="self-stretch flex-1 flex flex-col items-center justify-center p-2 gap-2 text-left text-base text-text-ui-text-default">
                        <div
                            className="self-stretch shadow-[0px_4px_8px_rgba(0,_0,_0,_0.08)] rounded-2xl bg-grayscale-white border-primary-ui-primary-100 border-[1px] border-solid box-border h-20 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-2">
                            <div
                                className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start py-2 px-6">
                                <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-2">
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div className="self-stretch relative leading-[120%]">Introduction to Financial
                                            Markets
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start text-xs">
                                        <div className="flex-1 relative leading-[120%]">25 min</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="self-stretch w-20 bg-grayscale-gray-200 overflow-hidden shrink-0 flex flex-row items-center justify-center gap-2">
                                <div
                                    className="w-6 h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
                                    <img className="w-[19.5px] relative h-[16.5px]" alt="" src="Vector.svg"/>
                                </div>
                                <img className="w-[142px] relative h-[99.5px] object-cover" alt=""
                                     src="Course image.png"/>
                            </div>
                        </div>
                        <div
                            className="self-stretch shadow-[0px_4px_8px_rgba(0,_0,_0,_0.08)] rounded-2xl bg-grayscale-white border-primary-ui-primary-100 border-[1px] border-solid box-border h-20 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-2">
                            <div
                                className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start py-2 px-6">
                                <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-2">
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div className="self-stretch relative leading-[120%]">Shares, stocks and
                                            equities
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start text-xs">
                                        <div className="flex-1 relative leading-[120%]">19 min</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="self-stretch w-20 bg-grayscale-gray-200 overflow-hidden shrink-0 flex flex-row items-center justify-center gap-2">
                                <div
                                    className="w-6 h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
                                    <img className="w-[19.5px] relative h-[16.5px]" alt="" src="Vector.svg"/>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="w-[142px] relative h-[99.5px] object-cover" alt=""
                                         src="image 1.png"/>
                                </div>
                            </div>
                        </div>
                        <div
                            className="self-stretch shadow-[0px_4px_8px_rgba(0,_0,_0,_0.08)] rounded-2xl bg-grayscale-white border-primary-ui-primary-100 border-[1px] border-solid box-border h-20 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-2">
                            <div
                                className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start py-2 px-6">
                                <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-2">
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div
                                            className="self-stretch relative leading-[120%]">{`Capitalization & Regulations`}</div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start text-xs">
                                        <div className="flex-1 relative leading-[120%]">18 min</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="self-stretch w-20 bg-grayscale-gray-200 overflow-hidden shrink-0 flex flex-row items-center justify-center gap-2">
                                <div
                                    className="w-6 h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
                                    <img className="w-[19.5px] relative h-[16.5px]" alt="" src="Vector.svg"/>
                                </div>
                                <div className="w-[142px] h-[99.5px] flex flex-col items-start justify-start">
                                    <img
                                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                                        alt="" src="image 8.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default CourseDetailsPopUp;
