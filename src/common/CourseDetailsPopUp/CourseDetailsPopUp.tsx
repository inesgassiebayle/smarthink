import React, { FunctionComponent } from 'react';
import Icon from "../Icon/Icon";
import "src/assets/statistics.jpg";




const CourseDetailsPopUp:FunctionComponent = () => {
    return (
        <div className="w-full relative rounded-2xl bg-grayscale-white border-grayscale-gray-300 border-[0.5px] border-solid box-border h-[673px] flex flex-col items-center justify-center p-2 text-justify text-base text-text-ui-text-default font-inter-body-small-regular">
            <div className="self-stretch rounded-t-2xl rounded-b-none bg-grayscale-white overflow-hidden flex flex-col items-end justify-center py-2 px-4">
                <div className="w-6 h-6 overflow-hidden shrink-0 flex flex-row items-center justify-center p-0.5 box-border">
                    <Icon size={"medium"} variant={"close"} colorClass = "text-primary-500"/>
                </div>
            </div>
            <div className="self-stretch flex-1 rounded-t-none rounded-b-2xl bg-grayscale-white overflow-hidden flex flex-col items-center justify-center pt-2 px-0 pb-0">
                <div className="self-stretch bg-grayscale-white h-[200px] overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
                    <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                        <img className="self-stretch flex-1 relative rounded-[25px] max-w-full overflow-hidden max-h-full object-cover" alt="" src={require("statistics.jpg")}/>
                    </div>
                </div>
                <div
                    className="self-stretch bg-grayscale-white overflow-hidden flex flex-col items-center justify-center gap-2">
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-2 px-4">
                        <div className="flex-1 relative leading-[120%] overflow-hidden text-ellipsis whitespace-nowrap">Financial Analysis and Modeling: Making Data-Driven Business Decisions</div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-center gap-8 text-center text-black">
                        <div className="bg-grayscale-white overflow-hidden flex flex-row items-center justify-center py-2 px-0 gap-1">
                            <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-row items-center justify-center p-0.5 box-border">
                                <img className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full" alt="" src="Vector.svg" />
                            </div>
                            <div className="w-20 relative leading-[120%] inline-block overflow-hidden text-ellipsis h-4 shrink-0">4.9 (1.724)</div>
                        </div>
                        <div className="overflow-hidden flex flex-row items-center justify-start gap-2 text-left text-xs text-text-ui-text-default">
                            <div className="w-8 rounded-[200px] h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center">
                                <img className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover" alt="" src="Boy 3.png" />
                            </div>
                            <div className="flex-1 relative leading-[120%] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[180px]">Christopher Suis</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-[349px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-4 px-0 box-border gap-2 text-center text-xs text-primary-ui-primary-500">
                    <div className="self-stretch bg-grayscale-white overflow-hidden flex flex-row items-center justify-center py-0 px-4">
                        <div className="flex-1 border-primary-ui-primary-500 border-b-[3px] border-solid box-border h-[46px] overflow-hidden flex flex-col items-center justify-center py-4 px-0">
                            <b className="self-stretch relative leading-[120%] overflow-hidden text-ellipsis whitespace-nowrap">Topics</b>
                        </div>
                        <div className="flex-1 border-grayscale-gray-100 border-b-[3px] border-solid box-border overflow-hidden flex flex-col items-center justify-center py-4 px-0 min-w-[132px] text-grayscale-grey-500">
                            <b className="self-stretch relative leading-[120%]">About</b>
                        </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-center justify-center p-2 gap-2 text-left text-base text-text-ui-text-default">
                        <div className="self-stretch shadow-[0px_4px_8px_rgba(0,_0,_0,_0.08)] rounded-2xl bg-grayscale-white border-primary-ui-primary-100 border-[1px] border-solid box-border h-20 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-2">
                            <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start py-2 px-6">
                                <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-2">
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div className="self-stretch relative leading-[120%]">Introduction to Financial Markets</div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start text-xs">
                                        <div className="flex-1 relative leading-[120%]">25 min</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch w-20 bg-grayscale-gray-200 overflow-hidden shrink-0 flex flex-row items-center justify-center gap-2">
                                <div className="w-6 h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
                                    <img className="w-[19.5px] relative h-[16.5px]" alt="" src="Vector.svg" />
                                </div>
                                <img className="w-[142px] relative h-[99.5px] object-cover" alt="" src="Course image.png" />
                            </div>
                        </div>
                        <div className="self-stretch shadow-[0px_4px_8px_rgba(0,_0,_0,_0.08)] rounded-2xl bg-grayscale-white border-primary-ui-primary-100 border-[1px] border-solid box-border h-20 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-2">
                            <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start py-2 px-6">
                                <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-2">
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div className="self-stretch relative leading-[120%]">Shares, stocks and equities</div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start text-xs">
                                        <div className="flex-1 relative leading-[120%]">19 min</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch w-20 bg-grayscale-gray-200 overflow-hidden shrink-0 flex flex-row items-center justify-center gap-2">
                                <div className="w-6 h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
                                    <img className="w-[19.5px] relative h-[16.5px]" alt="" src="Vector.svg" />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="w-[142px] relative h-[99.5px] object-cover" alt="" src="image 1.png" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch shadow-[0px_4px_8px_rgba(0,_0,_0,_0.08)] rounded-2xl bg-grayscale-white border-primary-ui-primary-100 border-[1px] border-solid box-border h-20 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-2">
                            <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start py-2 px-6">
                                <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-2">
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div className="self-stretch relative leading-[120%]">{`Capitalization & Regulations`}</div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-start text-xs">
                                        <div className="flex-1 relative leading-[120%]">18 min</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch w-20 bg-grayscale-gray-200 overflow-hidden shrink-0 flex flex-row items-center justify-center gap-2">
                                <div className="w-6 h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
                                    <img className="w-[19.5px] relative h-[16.5px]" alt="" src="Vector.svg" />
                                </div>
                                <div className="w-[142px] h-[99.5px] flex flex-col items-start justify-start">
                                    <img className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover" alt="" src="image 8.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default CourseDetailsPopUp;
