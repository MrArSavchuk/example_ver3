export const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const endpoints = {
    path: {
        about: "/about",
        portfolio: "/portfolio",
        reviews: "/reviews",
        contacts: "/contacts",
        services: "/services",
    },
    auth: {
        login: "/login",
        logout: "/logout"
    }
};