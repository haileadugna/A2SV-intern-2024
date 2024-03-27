import { LoginProps, SignupProps } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authSlice = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://akil-backend.onrender.com/",
    }),
    endpoints: (builder) => ({
        signup: builder.mutation<void, SignupProps>({ 
            query: (data) => ({
                url: "/signup",
                method: "POST",
                body: data,
            }),
        }),
        login: builder.mutation<void, LoginProps>({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useSignupMutation, useLoginMutation } = authSlice;