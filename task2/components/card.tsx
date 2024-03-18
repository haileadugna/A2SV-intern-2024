import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  title: string;
  organization: string;
  location: string;
  description: string;
  tags: string[];
  image: StaticImageData;
}

const Card: React.FC<CardProps> = ({ title, organization, location, description, tags, image }) => {
    return (
        <div className="h-[266px] w-[919px] rounded-[30px] border-[1px] bg-white p-[24px] overflow-auto">
            <div className="flex h-[100%] w-[100%] p-[24px]">
            <div className="h-[59px] w-[66px] mr-[24px]">
                    <Image src={image} alt="logo" />
                </div>
                <div className="h-[100%] w-[755px] flex flex-col gap-[8px] ">
                    <div className="flex items-start gap-[8px]">
                        <div>
                            <div className="font-epilogue font-semibold text-[20px] text-[#25324B] flex">
                                {title}
                            </div>
                            <div className="flex w-[454px] h-[27px] gap-[8px] items-center">
                                <div className="font-epilogue font-normal text-[16px] text-[#7C8493]">
                                    {organization}
                                </div>
                                <div className="w-[4px] h-[4px] flex items-center justify-center bg-[#7C8493] rounded-full"></div>
                                <div className="font-epilogue font-normal text-[16px] text-[#7C8493]">
                                    {location}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="w-[744px] h-[112px] font-epilogue text-[16px] leading-[25.6px] text-[#25324B] font-[400] text-start ">
                        {description}
                    </p>
                    <div className="flex w-[242px] h-[31px] gap-[8px]">
                        {tags.map((tag, index) => (
                            <div key={index} className="w-[76px] h-[31px] rounded-[80px] p-[6px] gap-[8px] flex justify-center items-center border border-[#4640DE]">
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