
import React from "react";
import logo from "../assets/react.svg"

const Card = () => {
    return (
        <div className="h-[266px] w-[919px] rounded-[30px] border-[1px] bg-white p-[24px] overflow-auto">
            <div className="flex h-[100%] w-[100%] p-[24px]">
                <div className="h-[59px] w-[66px] mr-[24px]">
                    <img src={logo} alt="logo" />
                </div>
                <div className="h-[100%] w-[755px] flex flex-col gap-[8px] ">
                    <div className="flex items-start gap-[8px]">
                        <div>
                            <div className="font-epilogue font-semibold text-[20px] text-[#25324B] flex">
                                Social Media Assistant
                            </div>
                            <div className="flex w-[454px] h-[27px] gap-[8px] items-center">
                                <div className="font-epilogue font-normal text-[16px] text-[#7C8493]">
                                    Young Men Christians Association
                                </div>
                                <div className="w-[4px] h-[4px] flex items-center justify-center bg-[#7C8493] rounded-full"></div>
                                <div className="font-epilogue font-normal text-[16px] text-[#7C8493]">
                                    Addis Ababa, Ethiopia
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="w-[744px] h-[112px] font-epilogue text-[16px] leading-[25.6px] text-[#25324B] font-[400] text-start ">
                        As a Social Media Assistant, you will work closely with the social
                        media manager or marketing team to execute social media strategies
                        and campaigns. You will be responsible for assisting in the creation
                        and scheduling of engaging content, monitoring social media
                        channels, and interacting with followers.
                    </p>
                    <div className="flex w-[242px] h-[31px] gap-[8px]">
                    <div className="flex w-[242px] h-[31px] gap-[8px]">
                        <div className="bg-[#e0f5ef] w-[76px] h-[31px] rounded-[80px] p-[6px] gap-[8px] flex justify-center items-center">
                            <div className="font-epilogue font-semibold text-[12px] text-[#56CDAD]">
                            In person
                            </div>
                        </div>
                        <div className="h-[100%] w-[1.5px] bg-gray-300"></div>
                        <div className="w-[76px] h-[31px] rounded-[80px] p-[6px] gap-[8px] flex justify-center items-center border border-[#FFB836]">
                            <div className="font-epilogue font-semibold text-[12px] text-[#FFB836]">
                            Education
                            </div>
                        </div>
                        <div className="w-[76px] h-[31px] rounded-[80px] p-[6px] gap-[8px] flex justify-center items-center border border-[#4640DE]">
                            <div className="font-epilogue font-semibold text-[12px] text-[#4640DE]">
                            IT
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;