// api.tsx

export const fetchClaim = async () => {
  const baseUrl:any = process.env.NEXT_PUBLIC_API_URL;
  console.log("Fetching promotional claim from:", baseUrl);
  
  try {
    const response = await fetch(baseUrl,{
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',  // Prevents caching
        'Pragma': 'no-cache',  // For HTTP/1.0 backward compatibility
        'Expires': '0',  // Forces expiration
      }
    });
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    // console.log("Promotional claim data:", data);
    return data?.data || 'Default Claim Text';
  } catch (error) {
    console.error('Error fetching promotional claim:', error);
    return 'Default Claim Text'; 
  }
};
