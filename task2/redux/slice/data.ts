import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpportunityDataProps } from "@/types/index";


export const opportunitiesSlice = createApi({
    reducerPath: "opportunities",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://akil-backend.onrender.com/",
    }),
    endpoints: (builder) => ({
        opportunities: builder.query<OpportunityDataProps, void>({ 
            query: () => "/opportunities/search",
        }),
        opportunity: builder.query<OpportunityDataProps, string>({
            query: (id) => `/opportunities/${id}`,
        }),
    }),
});

export const { useOpportunitiesQuery, useOpportunityQuery } = opportunitiesSlice;