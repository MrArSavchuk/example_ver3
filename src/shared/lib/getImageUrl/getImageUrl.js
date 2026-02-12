import { apiUrl } from "../../api/endpoints";


export const getFullImageUrl = (path) => {
    if (!path) return "";
    const trimmedPath = path.trim();
    return `${apiUrl.split("/api")[0]}/${trimmedPath}`;
};

export const getImageUrl = (src) => {
    if (!src) return "";
    const trimmedSrc = src.trim();
    if (trimmedSrc.startsWith("http") || trimmedSrc.startsWith("blob:")) {
        return trimmedSrc;
    }
    if (trimmedSrc.startsWith("uploads")) {
        return getFullImageUrl(trimmedSrc);
    }
    return trimmedSrc; 
};