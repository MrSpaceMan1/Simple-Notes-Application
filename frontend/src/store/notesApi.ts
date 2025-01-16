import { AddNoteType } from "../types/AddNote";
import { NoteType } from "../types/Note";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface NoteState{
    notes: Array<NoteType>
}

const BE_HOST = import.meta.env.VITE_BE_HOST
console.log(BE_HOST);

export const notesApi = createApi({
    reducerPath: "noteApi",
    baseQuery: fetchBaseQuery({ baseUrl: `http://${BE_HOST}`}),
    tagTypes: ["Notes"],
    endpoints: (builder) => ({
        getNotes: builder.query<Array<NoteType>, void>({
            query: () => "notes",
            providesTags: ["Notes"]
        }),
        addNote: builder.mutation<NoteType, AddNoteType>({
            query: (body) => ({
                url: "notes",
                method: "POST",
                body
            }),
            invalidatesTags: ["Notes"]
        }),
        deleteNote: builder.mutation<void, {id: number}>({
            query: ({id}) => ({
                url: `notes/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Notes"]
        })
    })
})

export const { useGetNotesQuery, useAddNoteMutation, useDeleteNoteMutation } = notesApi;