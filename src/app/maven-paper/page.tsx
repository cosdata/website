'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MavenPaperRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/maven-metadata-filtering');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to the new Maven Metadata Filtering page...</p>
    </div>
  );
} 