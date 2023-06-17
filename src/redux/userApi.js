import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ROUTES } from 'utils/routes';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api',
  }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => ROUTES.USERS,
      providesTags: ['Users'],
    }),
    getUser: builder.query({
      query: userId => `${ROUTES.USERS}/${userId}`,
    }),
    deleteUser: builder.mutation({
      query: userId => ({
        url: `${ROUTES.USERS}/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery, useDeleteUserMutation } =
  usersApi;
