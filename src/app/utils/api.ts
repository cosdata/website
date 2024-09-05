// api.tsx

export const fetchPromotionalClaim = async () => {
  const baseUrl:any = process.env.NEXT_PUBLIC_API_URL;
  console.log("Fetching promotional claim from:", baseUrl);
  
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    // console.log("Promotional claim data:", data);
    return data?.data[0]?.attributes || 'Default Claim Text';
  } catch (error) {
    console.error('Error fetching promotional claim:', error);
    return 'Default Claim Text'; 
  }
};
