import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { apiUrl } from "./endpoints";


const baseQuery = fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
        const token = Cookies.get("authToken");
        if (token) {
            headers.set("Authorization", token);
        }
        return headers;
    }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
        Cookies.remove("authToken");

        if (typeof window !== "undefined") {
            window.location.href = "/auth";
        }
    }

    return result;
};

export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Portfolio", "ServicePackage"],
    endpoints: () => ({}),
});

