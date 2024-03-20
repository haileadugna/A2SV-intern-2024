import React from 'react';
import { data } from '@/service/opportunitiesData';

const OpportunityDetail = ({ id }: { id: string }) => {
  // Find the opportunity with the matching id
  const opportunity = data.find((opportunity) => String(opportunity.id) === String(id));

  console.log(opportunity?.description, id);

  if (!opportunity) {
    return <p>Loading...</p>; // Handle case where opportunity is not found
  }

  return (
    <div>
      <h1>Opportunity Detail</h1>
      <p>ID: {id}</p>
      <p>Title: {opportunity.title}</p>
      <p>Sub Title: {opportunity.subTitle}</p>
      <p>Description: {opportunity.description}</p>
      {/* Render other details of the opportunity */}
    </div>
  );
};

export default OpportunityDetail;
