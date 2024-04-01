import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { hospitalsSlice } from "./api/dataApi";


export const store: any = configureStore({
    reducer: {
        [hospitalsSlice.reducerPath]: hospitalsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
                hospitalsSlice.middleware,
        ),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;