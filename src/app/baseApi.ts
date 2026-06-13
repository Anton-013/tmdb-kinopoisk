// import { handleError } from "@/common/utils"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
    reducerPath: "api",
    tagTypes: [],
    keepUnusedDataFor: 5,
    baseQuery: async (args, api, extraOptions) => {
        const result = await fetchBaseQuery({
            baseUrl: import.meta.env.VITE_BASE_URL,
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
            },
        })(args, api, extraOptions)

        // handleError(api, result)

        return result
    },
    endpoints: () => ({}),
})
