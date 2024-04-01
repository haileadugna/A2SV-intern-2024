import { hospitalsSlice } from '@/redux/api/dataApi';
import { DataProps } from '@/types';
import React from 'react';
import Image from 'next/image';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

function Card(dataProps: DataProps) {
    console.log(dataProps?.data.status)
  const getStatusColor = () => {
    return dataProps?.data.status === 'open' ? 'bg-red-100' : 'bg-green-400';
  };

  return (
    <div className="rounded-lg shadow-md px-4 max-w-5xl flex justify-center items-center min-h-48 ms-10">
      <div className="flex items-center w-full">
        <div className="">
          <Image
            src={dataProps?.data.coverPhoto}
            alt={dataProps?.data.institutionName}
            // layout="responsive"
            width={300}
            height={300}
          />
        </div>
        <div className="w-2/5 p-5">
            <div>
            <p className="text-gray-600">{dataProps?.data.address?.region}, {dataProps?.data.address?.zone}</p>
            </div>
          <h1 className="text-xl font-semibold">{dataProps?.data.institutionName}</h1>
          <div className='flex gap-5'>
            <p className='text-sm text-gray-600'>3 Kilometers Away</p>
          </div>
          <div className='flex gap-4 p-3'>
            <div className="flex items-center">
              <PhoneIcon className="text-gray-600 mr-2" />
              <p className="text-gray-600">{dataProps?.data.phoneNumbers}</p>
            </div>
            <div className="flex items-center">
              <EmailIcon className="text-gray-600 mr-2" />
              <p className="text-gray-600">{dataProps?.data.emails}</p>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex justify-end items-center">
          <button className={`px-4 py-2 text-white rounded ${getStatusColor()}`}>
            {dataProps?.data.status}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
