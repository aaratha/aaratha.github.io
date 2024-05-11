import React, { useRef, useEffect } from 'react';
import { createNoise2D } from 'simplex-noise';

function AnimatedBlob() {
  const ref = useRef();
  const noise2D = createNoise2D();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    const centerX = 250;
    const centerY = 250;
    const numPoints = 6;
    const radius = 100;
    let frame = 0;

    function draw() {
      frame += 0.01;
      ctx.clearRect(0, 0, 500, 500);
      ctx.beginPath();
      ctx.fillStyle = "#000000";

      // Create points around the circle using noise to modify the radius
      const points = [];
      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * 2 * Math.PI;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        const distortion = noise2D(x * 0.01, y * 0.01 + frame) * 30;
        points.push({
          x: x + distortion,
          y: y + distortion
        });
      }

      // Draw the blob by connecting the points with curves
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        const nextPoint = points[(i + 1) % points.length];
        const cpX = (points[i].x + nextPoint.x) / 2;
        const cpY = (points[i].y + nextPoint.y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, cpX, cpY);
      }
      ctx.closePath();
      ctx.fill();

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return <canvas className="opacity-50" ref={ref} width={500} height={500}  />;
}

export default AnimatedBlob;
