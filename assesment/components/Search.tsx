'use client'
import React, { useState, useEffect } from 'react';
import { useSearchQuery } from '@/redux/api/dataApi';
import { DataProps } from '../types';
import SearchIcon from '@material-ui/icons/Search';

interface SearchProps {
    onSearch: (data: DataProps[]) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data, error } = useSearchQuery(searchTerm);

    useEffect(() => {
        if (data && !error) {
            onSearch(data?.data);
        }
    }, [data, error, onSearch]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="flex items-center border rounded-md overflow-hidden m-5">
            <button className="bg-gray-200 p-2" onClick={() => setSearchTerm('')}>
                <SearchIcon />
            </button>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
                className="px-4 py-2 w-full outline-none"
                
            />
            
        </div>
    );
};

export default Search;
