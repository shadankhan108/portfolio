import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = '01';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    const drops = Array(columns).fill(1);

    const draw = () => {
  
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

 
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
      
        const text = characters.charAt(Math.floor(Math.random() * characters.length));

      
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

   
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

  
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);


    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      drops.length = Math.floor(canvas.width / fontSize);
      drops.fill(1);
    };

    window.addEventListener('resize', resizeCanvas);

    return () => {
      clearInterval(interval);
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
        background: 'black',
      }}
    />
  );
};

export default MatrixBackground;
