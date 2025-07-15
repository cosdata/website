import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('../../components/PDFViewer'), { ssr: false });

export default function DynamicMemoryAIAgentsPDFPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">CHANNI: A Multi-Level Vector Search Index with Nested Graph
                Navigation</h1>
            <PDFViewer fileUrl="/pdfs/channi.pdf" />
        </main>
    );
}