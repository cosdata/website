import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('../../components/PDFViewer'), { ssr: false });

export default function DynamicMemoryAIAgentsPDFPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">Toward a Human-Like Memory System for AI
                Agents</h1>
            <PDFViewer fileUrl="/pdfs/dynamic-memory-ai-agents.pdf" />
        </main>
    );
}