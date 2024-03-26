'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { AiOutlineFire } from "react-icons/ai";
import { BsCalendar2Plus, BsSkipStartBtn } from "react-icons/bs";
import { PiCalendarCheck } from "react-icons/pi";
import { useOpportunityQuery } from '@/redux/slice/data';


const OpportunityDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useOpportunityQuery(id as string);
  // const newData = da;
  console.log(id);
  console.log(data);
  // const opportunity = newData.find((item: { id: any; }) => String(item.id) === String(id));

  // console.log('opportunity', opportunity, id);
  // if (!opportunity) {
  //   return <p>Loading...</p>; // Handle case where opportunity is not found
  // }

// interface OpportunityDataProps {
//   id: string;
//   title: string;
//   description: string;
//   responsibilities: string;
//   requirements: string;
//   idealCandidate: string;
//   categories: string[];
//   opType: string;
//   startDate: string;
//   endDate: string;
//   deadline: string;
//   location: string[];
//   requiredSkills: string[];
//   whenAndWhere: string;
//   orgID: string;
//   datePosted: string;
//   status: string;
//   applicantsCount: number;
//   viewsCount: number;
//   orgName: string;
//   logoUrl: string;
//   isBookmarked: boolean;
//   isRolling: boolean;
//   questions: any;
//   perksAndBenefits: any;
//   createdAt: string;
//   updatedAt: string;
//   orgEmail: string;
// }

  return (
    <div className="grid grid-cols-3 gap-14 p-8 ml-5">
      <div className="col-span-2 py-12 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="font-poppins font-extrabold text-3xl leading-7 text-gray-900">
            {data?.description}
          </h2>
          <p className="font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]">
            {}
          </p>
        </div>

    


                <div className="flex flex-col gap-4">
                    <h3 className="font-poppins font-extrabold text-3xl leading-7 text-gray-900">
                        Responsibilities
                    </h3>
                    {/* <ul className="list-disc flex flex-col gap-2">
                        {data?.responsibilities.map((item: string, key: number) => (
                            <li key={key} className="flex items-center font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]">
                                <span className="mr-2"><FaRegCircleCheck className="text-green-500" /></span>
                                {item}
                            </li>
                        ))}
                    </ul> */}
                </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-poppins font-extrabold text-3xl leading-7 text-gray-900">
            Ideal Candidate we want
          </h3>
          {/* <ul className="list-disc pl-6">
            {data?.idealCandidate.map((item: { label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: any; }, index: React.Key | null | undefined) => (
              <li key={index} className="mb-4">
                <p className="font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]">
                  <span className="font-semibold">{item.label}</span>{" "}
                  {item.description && item.description}
                </p>
              </li>
            ))}
          </ul> */}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-poppins font-extrabold text-3xl leading-7 text-gray-900">
            When and Where
          </h3>
          <div className="flex gap-4 items-center">
            <CiLocationOn className="text-blue-800 rounded-full border border-[#D6DDEB] p-2 w-12 h-12" />
            <p>{data?.whenAndWhere}</p>
          </div>
        </div>
      </div>
      <aside className="col-span-1">
        <h3 className="font-poppins font-extrabold text-3xl mb-5 leading-7 text-gray-900">
          About
        </h3>
        <ul className="list-disc mb-6 flex flex-col gap-5">
          <li className="flex items-center gap-4">
            <HiOutlinePlusCircle className="text-blue-800 rounded-full border border-[#D6DDEB] p-2 w-12 h-12"/>
            <div className="font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]">
              <p>Posted on</p>
              <p className="font-semibold">{data?.datePosted}</p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <AiOutlineFire className="text-blue-800 rounded-full border border-[#D6DDEB] p-2 w-12 h-12" />
            <div className="font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]">
              <p>Deadline</p>
              <p className="font-semibold">{data?.deadline}</p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <CiLocationOn className="text-blue-800 rounded-full border border-[#D6DDEB] p-2 w-12 h-12" />
            <div className="font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]">
              <p>Location</p>
              <p className="font-semibold">{data?.location}</p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <BsCalendar2Plus  className="text-blue-800 rounded-full border border-[#D6DDEB] p-2 w-12 h-12"/>
            <div className="font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]">
              <p>Start Date</p>
              <p className="font-semibold">{data?.startDate}</p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <PiCalendarCheck className="text-blue-800 rounded-full border border-[#D6DDEB] p-2 w-12 h-12" />
            <div className="font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]">
              <p>End Date</p>
              <p className="font-semibold">{data?.endDate}</p>
            </div>
          </li>
        </ul>

        <div className="flex flex-col gap-6 justify-between mb-6">
          <h3 className="font-poppins font-extrabold text-3xl leading-7 text-gray-900">
            Categories
          </h3>
          <div className="flex gap-2 items-center">
            {data?.categories.map((category, index) => (
              <div key={index}>
                <div className={`${index % 2 === 0 ? "text-[#FFB836]" : "text-[#56CDAD]"} ${index % 2 === 0
                        ? "bg-[#EB8533] bg-opacity-10"
                        : "bg-[#e0f5ef]"} h-[31px] rounded-[80px] px-[10px] py-[6px] gap-[8px] flex justify-center items-center`}>
                  <p className={`font-epilogue font-semibold text-[12px]`}>{category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[293.5px] border border-[#D6DDEB] mb-6"></div>
        <div className="flex flex-col gap-4">
          <h3 className="font-poppins font-extrabold text-3xl leading-7 text-gray-900">
            Required Skills
          </h3>
          <div className="flex flex-wrap gap-4 items-center">
            {data?.requiredSkills.map((skill, index) => (
              <div key={index} className="w-[calc(50%-0.5rem)]">
                <div className={`${"text-[#4640DE] text-[16p]"} "rounded-none" ${"bg-[#F8F8FD]"} h-[31px] rounded-[80px] px-[10px] py-[6px] gap-[8px] flex justify-center items-center`}>
                  <p className={`font-epilogue font-semibold text-[12px]`}>{skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}


export default OpportunityDetail; 

