"use client";

import React, { useEffect, useRef } from "react";

type ColorArray = [number, number, number];

interface Shape {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
}

const GradientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const svgImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const colors: ColorArray[] = [
      [255, 182, 193], // Lighter Pink #FFB6C1
      [173, 216, 230], // Light Blue #ADE8E6 (new, lighter blue)
      [135, 206, 235], // Sky Blue #87CEEB (new)
      [240, 248, 255], // Alice Blue #F0F8FF (new, very light blue)
    ];

    let colorIndices = [0, 1, 2, 3];
    let gradientSpeed = 0.0015; // Slowed down for smoother transitions
    let step = 0;

    const shapes: Shape[] = [];
    const fixedSize = 120; // Set a fixed size for all triangles

    const updateSize = () => {
      canvas.width = window.innerWidth * 1.2;
      canvas.height = Math.min(window.innerHeight * 0.7, 1000);
      createShapes();
    };

    const createShapes = () => {
      const numTriangles = window.innerWidth < 768 ? 3 : 6; // 3 triangles for mobile view, 6 for larger screens

      shapes.length = 0; // Clear existing shapes

      for (let i = 0; i < numTriangles; i++) {
        shapes.push({
          x: Math.random() * canvas.width, // Random X position
          y: Math.random() * canvas.height, // Random Y position
          size: fixedSize, // Use fixed size for all shapes
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          rotation: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawTriangleSVG = (x: number, y: number, size: number, rotation: number) => {
      if (!svgImageRef.current) return;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Draw the SVG image to the canvas without stretching.
      const offset = size / 2;
      ctx.drawImage(svgImageRef.current, -offset, -offset, size, size); // Keep the size constant

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

      shapes.forEach((shape) => {
        drawTriangleSVG(shape.x, shape.y, shape.size, shape.rotation);

        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += 0.001;

        if (shape.x < shape.size || shape.x > canvas.width - shape.size) {
          shape.speedX *= -1;
        }
        if (shape.y < shape.size || shape.y > canvas.height - shape.size) {
          shape.speedY *= -1;
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
    <div className="absolute inset-0 -z-10 max-h-[800px]">
      <canvas
        ref={canvasRef}
        className="w-full h-full transform -skew-y-12 origin-top-left"
      />
      <img
        ref={svgImageRef}
        src={"/svgs/blue_triangle.svg"}
        alt="Triangle SVG"
        style={{ display: "none" }} // Hide the image element
      />
    </div>
  );
};

export default GradientBackground;
