import React, { useRef, useEffect } from 'react';
import { createNoise2D } from 'simplex-noise';

function AnimatedBlob() {
  const ref = useRef<HTMLCanvasElement>(null);

  const noise2D = createNoise2D();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return; // Ensures that canvas is not null
    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Ensures that the context is available
    const centerX = 250;
    const centerY = 250;
    const numPoints = 6;
    const radius = 100;
    let frame = 0;

    function draw() {
    frame += 0.01;
    ctx?.clearRect(0, 0, 500, 500); // Use optional chaining to avoid type error
    ctx?.beginPath();
    ctx!.fillStyle = "#57786d"; // Set properties only if ctx is not null

    const points = [];
    for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * 2 * Math.PI;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        const distortion = noise2D(x * 0.01, y * 0.01 + frame) * 30;
        points.push({ x: x + distortion, y: y + distortion });
    }

    ctx?.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        const nextPoint = points[(i + 1) % points.length];
        const cpX = (points[i].x + nextPoint.x) / 2;
        const cpY = (points[i].y + nextPoint.y) / 2;
        ctx?.quadraticCurveTo(points[i].x, points[i].y, cpX, cpY);
    }
    ctx?.closePath();
    ctx?.fill();

    requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return <canvas className="opacity-75" ref={ref} width={500} height={500}  />;
}

export default AnimatedBlob;
