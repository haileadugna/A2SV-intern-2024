'use client';

import React from 'react';
import { data } from '@/service/opportunitiesData';
import { useParams } from 'next/navigation';
import Head from 'next/head';

const OpportunityDetail = () => {
  const { id } = useParams();
  const opportunity = data.find((item) => String(item.id) === String(id));

  // console.log('opportunity', opportunity, id);
  if (!opportunity) {
    return <p>Loading...</p>; // Handle case where opportunity is not found
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Social Media Assistant Job Posting</title>
      </Head>

      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Social Media Assistant</h2>
            <h3 className="text-md mb-4 text-gray-600">Addis Ababa, Ethiopia</h3>
            <p className="text-gray-700 mb-4">
              We are looking for a creative and strategic Social Media Assistant to join our team...
            </p>
            {/* ... */}
          </div>
          <div className="bg-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Develop social media content plans...</li>
              <li>Monitor analytics to identify viable ideas...</li>
              {/* ... */}
            </ul>
          </div>
          {/* ... */}
        </div>
      </div>
    </div>
  );
}

export default OpportunityDetail;
