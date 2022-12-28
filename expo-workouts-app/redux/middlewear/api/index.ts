import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Workout} from '../../../types'
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const workoutsApi = createApi({
  reducerPath: 'workoutsApi',
  // baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  baseQuery: fetchBaseQuery({baseUrl: 'https://rest-api.bestsoftwarereviews.co.uk/'}),
  endpoints: builder => ({
    // getPokemonByName: builder.query<{species: {name: string}}, string>({
    //   query: name => `pokemon/${name}`,
    // }),
    getWorkouts: builder.query<{workouts: Workout[]}, string>({
      query: name => `workouts/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetWorkoutsQuery} = workoutsApi
