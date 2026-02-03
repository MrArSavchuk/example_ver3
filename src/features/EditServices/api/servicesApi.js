
const SERVICES_URL = "https://interior-designer-backend-k9ub.onrender.com/api/services";

export const servicesApi = async () => {
  try {
    const response = await fetch(`${SERVICES_URL}?lang=en`);
    if (!response.ok) throw new Error("Failed to fetch services");
    const data = await response.json();
    console.log("Services data:", data);
    return data; 
  } catch (err) {
    console.error(err);
    throw err; 
  }
};
