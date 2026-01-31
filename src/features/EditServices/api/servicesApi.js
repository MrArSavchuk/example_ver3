// export const servicesApi = async () => {
//     const response = await fetch(`https://interior-designer-backend-k9ub.onrender.com/api/services?lang=en`);
//     const data = await response.json();
//     console.log('Services data:', data);
//     return data;
// }

// export const servicesApi = async () => {
//   try {
//     const response = await fetch(
//       "https://interior-designer-backend-k9ub.onrender.com/api/services?lang=en"
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch services");
//     }

//     const data = await response.json();
//     console.log("Services data:", data);
//     return data;
//   } catch (error) {
//     console.error("servicesApi error:", error);
//     throw error;
//   }
// };

const SERVICES_URL = "https://interior-designer-backend-k9ub.onrender.com/api/services";

export const servicesApi = async (lang = "en") => {
  try {
    const params = new URLSearchParams({ lang });
    const response = await fetch(`${SERVICES_URL}?${params.toString()}`);
    if (!response.ok) throw new Error("Failed to fetch services");
    const data = await response.json();
    console.log("Services data:", data);
    return data; 
  } catch (err) {
    console.error(err);
    throw err; 
  }
};
