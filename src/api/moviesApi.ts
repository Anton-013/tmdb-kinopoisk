import { baseApi } from "../app/baseApi";
import type { TypeCategory } from "./moviesApi.types";

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMovies: build.query<any, { category: TypeCategory }>({
            query: ({ category }) => {
                return {
                    url: `movie/${category}`,
                }
            }
        })
    })
})

export const {
    useGetMoviesQuery
} = moviesApi