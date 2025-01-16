import { configureStore } from "@reduxjs/toolkit";
import { notesApi as notesApi } from "./notesApi"

export const store = configureStore({
    reducer: {
        [notesApi.reducerPath]: notesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(notesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch