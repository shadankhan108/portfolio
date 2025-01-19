import React, { useEffect, useRef } from 'react';

const NodeGraphBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Node class
    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 4;
        this.dx = Math.random() - 0.5;
        this.dy = Math.random() - 0.5;
        this.connections = [];
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#2196F3';
        ctx.fill();
      }

      update(nodes) {
        this.x += this.dx;
        this.y += this.dy;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
        if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;

        // Connect to nearby nodes
        this.connections = nodes.filter((node) => {
          const distance = Math.hypot(this.x - node.x, this.y - node.y);
          return distance < 100 && node !== this;
        });

        this.drawConnections();
        this.draw();
      }

      drawConnections() {
        this.connections.forEach((node) => {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(node.x, node.y);
          ctx.strokeStyle = 'rgba(33, 150, 243, 0.5)';
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      }
    }

    // Create nodes
    const nodes = [];
    for (let i = 0; i < 50; i++) {
      nodes.push(new Node(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((node) => node.update(nodes));
      requestAnimationFrame(animate);
    };

    animate();

    // Handle resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
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

export default NodeGraphBackground;
