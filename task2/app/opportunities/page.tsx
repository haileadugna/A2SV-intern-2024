'use client';
import Card from "@/components/card";
import { useAppDispatch } from "@/redux/hook";
import { useOpportunitiesQuery } from "@/redux/slice/data";
import { OpportunityDataProps } from "@/types";
import Link from "next/link";
import { useState } from "react";

const Opportunities = () => {

    const { data, error, isLoading } = useOpportunitiesQuery();
    const newData = data?.data.slice(2);
    const [isAscending, setIsAscending] = useState(true);

    const handleSortBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newIsAscending = !isAscending;
        setIsAscending(newIsAscending);
        let sortedData = newData ? [...newData] : [];

        sortedData.sort((a: OpportunityDataProps, b: OpportunityDataProps) => 
            newIsAscending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        );
    };
    

    return (
        <div className="p-5 gap-5 flex flex-col items-center">
            {/* add sort by button at the top */}
            <div>
                <p>Job Opportunities</p>
                {/* <button onClick={handleSortBy}>Sort by ▼</button> */}
                <select onChange={handleSortBy}>
                    <option value="">Sort by</option>
                    <option value="title">Title</option>
                    <option value="datePosted">Date Posted</option>
                    {/* Add more options as needed */}
                </select>

            </div>

                {newData?.map((item: OpportunityDataProps) => (
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
    );
}

export default Opportunities;