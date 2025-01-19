import React, { useEffect, useRef } from 'react';

const DynamicScatterBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pointCount = 100; // Number of data points
    const points = [];

    // Generate random points
    for (let i = 0; i < pointCount; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 2, // Radius between 2 and 4
        dx: (Math.random() - 0.5) * 0.5, // Small horizontal movement
        dy: (Math.random() - 0.5) * 0.5, // Small vertical movement
      });
    }

    const draw = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each point
      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(33, 150, 243, 0.7)'; // Semi-transparent blue
        ctx.fill();
      });
    };

    const update = () => {
      points.forEach((point) => {
        point.x += point.dx;
        point.y += point.dy;

        // Bounce off edges
        if (point.x > canvas.width || point.x < 0) point.dx *= -1;
        if (point.y > canvas.height || point.y < 0) point.dy *= -1;
      });
    };

    const animate = () => {
      draw();
      update();
      requestAnimationFrame(animate);
    };

    animate();

    // Handle resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default DynamicScatterBackground;
