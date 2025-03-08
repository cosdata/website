import { NextResponse } from 'next/server';
import axios from 'axios';

const githubRawUrl = "https://raw.githubusercontent.com/cosdata/cosdata/refs/heads/main/install/install.sh";

export async function GET(request: Request) {
  try {
    console.log('Fetching install script from:', githubRawUrl);
    
    const response = await axios.get(githubRawUrl);
    
    // Log the response
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
    
    // Return the script content with proper content type
    return new NextResponse(response.data, {
      headers: {
        'Content-Type': 'text/plain',
        // Prevent caching to ensure we always get fresh content
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      },
    });
  } catch (error) {
    console.error('Error fetching install script: ', error);
    return new NextResponse(`Error fetching install script: ${error}`, {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
} 