const REVIEWS_URL = "https://interior-designer-backend-k9ub.onrender.com/api/reviews";

export const reviewsApi = async (lang = "en") => {
  try {
    const response = await fetch(`${REVIEWS_URL}?lang=${lang}`);

    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};