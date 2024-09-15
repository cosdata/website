"use client";

import React, { useEffect, useRef } from "react";

type ColorArray = [number, number, number];

interface Ellipse {
    x: number;
    y: number;
    radiusX: number;
    radiusY: number;
    speedX: number;
    speedY: number;
    rotation: number;
}

const GradientBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const colors: ColorArray[] = [
            [255, 182, 193], // Lighter Pink #FFB6C1
            [77, 169, 255],  // Light blue #4DA9FF
            [0, 102, 204],   // Dark blue #0066CC
            [255, 255, 255], // White #FFFFFF
        ];

        let colorIndices = [0, 1, 2, 3];
        let gradientSpeed = 0.002;
        let step = 0;

        let ellipses: Ellipse[] = [];

        const updateSize = () => {
            canvas.width = window.innerWidth * 1.2;
            // Set the height to be the minimum of 1000px or 70% of window height.
            canvas.height = Math.min(window.innerHeight * 0.7, 1000);
            createEllipses();
        };

        const createEllipses = () => {
            const size = canvas.width * 0.285;
            const positions = [
                { x: canvas.width * 0.125, y: canvas.height * 0.125 },
                { x: canvas.width * 0.75, y: canvas.height * 0.25 },
                { x: canvas.width * 0.5, y: canvas.height * 0.95 },
            ];

            ellipses = positions.map((pos) => ({
                x: pos.x,
                y: pos.y,
                radiusX: size / 2,
                radiusY: size / 2,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                rotation: Math.random() * Math.PI * 2,
            }));
        };

        const drawEllipse = (
            x: number,
            y: number,
            radiusX: number,
            radiusY: number,
            rotation: number,
            color: string
        ) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        };

        const lerpColor = (color1: number[], color2: number[], factor: number): number[] => {
            return color1.map((c, i) => Math.round(c + factor * (color2[i] - c)));
        };

        const animate = () => {
            const c0_0 = colors[colorIndices[0]];
            const c0_1 = colors[colorIndices[1]];
            const c1_0 = colors[colorIndices[2]];
            const c1_1 = colors[colorIndices[3]];

            const istep = 1 - step;
            const r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
            const g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
            const b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
            const color1 = [r1, g1, b1];

            const r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
            const g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
            const b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
            const color2 = [r2, g2, b2];

            // Create a gradient from the bottom-left to top-right
            const gradient = ctx.createLinearGradient(0, canvas.height, canvas.width, 0);
            gradient.addColorStop(0, `rgb(${color1.join(",")})`);
            gradient.addColorStop(1, `rgb(${color2.join(",")})`);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ellipses.forEach((ellipse) => {
                const t = ellipse.y / canvas.height;
                const ellipseBaseColor = lerpColor(color1, color2, t);
                const ellipseColor = lerpColor(ellipseBaseColor, [255, 255, 255], 0.2);

                drawEllipse(
                    ellipse.x,
                    ellipse.y,
                    ellipse.radiusX,
                    ellipse.radiusY,
                    ellipse.rotation,
                    `rgba(${ellipseColor.join(",")},0.2)`
                );

                ellipse.x += ellipse.speedX;
                ellipse.y += ellipse.speedY;
                ellipse.rotation += 0.001;

                if (ellipse.x < ellipse.radiusX || ellipse.x > canvas.width - ellipse.radiusX) {
                    ellipse.speedX *= -1;
                }
                if (ellipse.y < ellipse.radiusY || ellipse.y > canvas.height - ellipse.radiusY) {
                    ellipse.speedY *= -1;
                }
            });

            step += gradientSpeed;
            if (step >= 1) {
                step %= 1;
                colorIndices = [
                    colorIndices[1],
                    (colorIndices[1] + 1) % colors.length,
                    colorIndices[3],
                    (colorIndices[3] + 1) % colors.length,
                ];
            }

            animationFrameId = requestAnimationFrame(animate);
        };


        updateSize();
        window.addEventListener("resize", updateSize);
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", updateSize);
        };
    }, []);

    return (
        <div className="absolute inset-0 -z-10">
            <canvas
                ref={canvasRef}
                className="w-full h-full transform -skew-y-12 origin-top-left"
            />
        </div>
    );
};

export default GradientBackground;
