'use client'
import React, { useState } from 'react';
import Card from '../components/card';
import { useHospitalsQuery } from '@/redux/api/dataApi';
import { DataProps } from '../types'; // Add the import statement for DataProps
import Loading from './Loading';
import Search from './Search';

function HomePage() {
    const [searchResults, setSearchResults] = useState<DataProps[]>([]);
    const { data, isLoading, error } = useHospitalsQuery();

    if (isLoading) return <Loading />;
    if (error) return <div>Error fetching data</div>;

    const handleSearch = (data: DataProps[]) => {
        setSearchResults(data);
    };
    return (
        <div>
            <Search onSearch={handleSearch} />
            <div className='flex flex-col m-5 '>
                {data?.data.map((item: DataProps, index: number) => (
                    <Card key={index} data={item} /> // Update the prop name to 'data'
                ))}
            </div>
        </div>
    );
}

export default HomePage;