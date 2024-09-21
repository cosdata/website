import React from 'react';

const BackgroundOverlay = () => {
    return (
        <div className="fixed inset-0 overflow-hidden -z-20 opacity-60">
            {/* Top Right Triangle */}
            <img
                src="/svgs/dotted_triangle.svg" // Adjust the path as necessary
                alt="Dotted Triangle"
                className="absolute top-0 right-0 w-[600px] h-[600px] transform translate-x-1/2"
            />

            {/* Middle Left Triangle */}
            <img
                src="/svgs/dotted_triangle.svg" // Adjust the path as necessary
                alt="Dotted Triangle"
                className="absolute left-0 top-1/2 w-[600px] h-[600px] transform -translate-y-1/2 translate-x-1/2"
            />

            {/* Bottom Middle Triangle */}
            <img
                src="/svgs/dotted_triangle.svg" // Adjust the path as necessary
                alt="Dotted Triangle"
                className="absolute left-1/2 bottom-0 w-[600px] h-[600px] rotate-[30deg] transform translate-x-1/2 translate-y-1/2"
            />
        </div>
    );
};

export default BackgroundOverlay;
