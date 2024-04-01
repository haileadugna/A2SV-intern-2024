

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DataProps } from "@/types/index";
import { ApiEndpointQuery } from "@reduxjs/toolkit/query/react";

export const hospitalsSlice = createApi({
    reducerPath: "hospital",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://hakimhub-api-dev-wtupbmwpnq-uc.a.run.app/api/v1",
    }),
    endpoints: (builder) => ({
        hospitals: builder.query<DataProps, void>({
            query: () => ({
                url: '/search',
                method: 'POST',
                body: {
                    institutions: true,
                    articles: false,
                    doctors: false
                }
            }),
        }),
        search: builder.query<DataProps, string>({
            query: (searchTerm) => `/search?keyword=${searchTerm}&institutions=true&articles=false&doctors=false`,
        }),
    }),
});

export const { useHospitalsQuery, useSearchQuery } = hospitalsSlice;