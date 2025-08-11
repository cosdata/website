"use client";


import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { useEffect, useRef } from 'react';

interface PDFViewerProps {
    fileUrl: string;
}

import { Plugin, createStore, PluginFunctions } from '@react-pdf-viewer/core';

export default function PDFViewer({ fileUrl }: PDFViewerProps) {
    // Custom zoom plugin to allow programmatic zoom
    interface CustomZoomPlugin extends Plugin {
        zoomTo: (scale: number | SpecialZoomLevel) => void;
    }

    const customZoomPlugin = (): CustomZoomPlugin => {
        const store = createStore<{ zoom?: (scale: number | SpecialZoomLevel) => void }>();
        return {
            install: (pluginFunctions: PluginFunctions) => {
                store.update('zoom', pluginFunctions.zoom);
            },
            zoomTo: (scale: number | SpecialZoomLevel) => {
                const zoom = store.get('zoom');
                if (zoom) {
                    zoom(scale);
                }
            },
        };
    };

    const customZoomPluginInstance = useRef(customZoomPlugin()).current;
    const defaultLayoutPluginInstance = useRef(
        defaultLayoutPlugin({
            setInitialTab: async () => 1,
        })
    ).current;

    return (
        <div className="flex flex-col w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="flex-1 flex justify-center items-center p-6">
                <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-7xl" style={{ height: '95vh' }}>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <Viewer 
                            fileUrl={fileUrl} 
                            defaultScale={1.5}
                            plugins={[defaultLayoutPluginInstance, customZoomPluginInstance]} 
                        />
                    </Worker>
                </div>
            </div>
        </div>
    );
}
