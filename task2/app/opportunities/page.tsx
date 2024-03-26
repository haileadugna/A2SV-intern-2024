'use client';
import Card from "@/components/card";
import { useAppDispatch } from "@/redux/hook";
import { useOpportunitiesQuery } from "@/redux/slice/data";
import { OpportunityDataProps } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

const Opportunities = () => {

    const { data, error, isLoading } = useOpportunitiesQuery();
    const newData = data?.data.slice(2);
    const [sorting, setSorting] = useState<string>("");
    const [sortData, setSortData] = useState<OpportunityDataProps[]>();
    console.log(sortData);
    

    useEffect(() => {
        if (data) {
            const newData = data.data.slice(2);
            setSortData(newData);
        }
    }, [data]);

    const handleSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSorting(value);
        const temp = newData;
        if (value === "title") {
            temp.sort((a: { title: string; }, b: { title: any; }) => a.title.localeCompare(b.title));
        } else if (value === "datePosted") {
            temp.sort((a: { datePosted: string | number | Date; }, b: { datePosted: string | number | Date; }) => new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime());
        } 
        setSortData(temp);
    }

    if (isLoading) return (
        <div className="flex justify-center items-center mt-32">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
    );

    return (
        <div className="p-5 gap-5 flex flex-col ">
            <div className="flex flex-row justify-between border-2 p-4 mx-10">
                <div className="pe-7">
                    <p className="text-lg font-bold">Job Opportunities</p>
                </div>
                <div>
                    <select className="px-2 py-1 border rounded-md bg-white" onChange={handleSortBy}>
                        <option value="">Sort by</option>
                        <option value="title">Title</option>
                        <option value="datePosted">Date Posted</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
            </div>
            <div className="flex flex-col items-center">
                {sortData?.map((item: OpportunityDataProps) => (
                <Link href={`opportunities/${item.id}`} key={item.id}>
                 
                    <Card 
                            // key={index}
                            title={item.title}
                            orgName={item.orgName}
                            description={item.description}
                            categories={item.categories}
                            logoUrl={item.logoUrl} id={""} responsibilities={""} requirements={""} idealCandidate={""} opType={""} startDate={""} endDate={""} deadline={""} location={[]} requiredSkills={[]} whenAndWhere={""} orgID={""} datePosted={""} status={""} applicantsCount={0} viewsCount={0} isBookmarked={false} isRolling={false} questions={undefined} perksAndBenefits={undefined} createdAt={""} updatedAt={""} orgEmail={""}                    />
                    
                </Link>
                ))}
            </div>
        </div>
    );
}

export default Opportunities;