import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ROUTES } from 'utils/routes';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api',
  }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => ROUTES.USERS,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
