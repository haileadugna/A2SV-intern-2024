import { OpportunityDataProps } from "@/types";
import Image from "next/image";
import React from "react";

const Card: React.FC<OpportunityDataProps> = ({ title, orgName, description, categories, logoUrl }) => {
    return (
        <div className=" mb-4 rounded-[30px] border-[1px] bg-white p-[24px] overflow-auto">
            <div className="flex h-[100%] w-[100%] p-[24px]">
            <div className="h-[59px] w-[66px] mr-[24px]">
                    <Image src={logoUrl} alt="logo" width={200} height={200}/>
                </div>
                <div className="h-[100%] w-[755px] flex flex-col gap-[8px] ">
                    <div className="flex items-start gap-[8px]">
                        <div>
                            <div className="font-epilogue font-semibold text-[20px] text-[#25324B] flex">
                                {title}
                            </div>
                            <div className="flex w-[454px] h-[27px] gap-[8px] items-center">
                                <div className="font-epilogue font-normal text-[16px] text-[#7C8493]">
                                    {orgName}
                                </div>
                                <div className="w-[4px] h-[4px] flex items-center justify-center bg-[#7C8493] rounded-full"></div>
                                <div className="font-epilogue font-normal text-[16px] text-[#7C8493]">
                                    Addis Ababa, Ethiopia
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="w-[744px] h-[112px] font-epilogue text-[16px] leading-[25.6px] text-[#25324B] font-[400] text-start ">
                        {description}
                    </p>
                    <div className="flex w-auto h-[31px] gap-[8px] mt-5">
                        {categories.map((tag, index) => (
                            <div key={index} className=" h-auto rounded-[80px] p-[6px] gap-[8px] flex justify-center items-center border border-[#4640DE]">
                                <div className="font-epilogue font-semibold text-[12px] text-[#4640DE]">
                                    {tag}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;